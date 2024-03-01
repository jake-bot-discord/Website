import { PRIVATE_STRIPE_KEY } from "$env/static/private"
import { PUBLIC_API_URL } from "$env/static/public"
import vipsJson from "$lib/mocks/vips.json"
import { error, redirect } from "@sveltejs/kit"
import Stripe from "stripe"

export async function GET({ url }) {
    const stripe = new Stripe(PRIVATE_STRIPE_KEY, {
        apiVersion: "2023-10-16"
    })

    const vipId: any = url.searchParams.get("vip")
    const duration: any = url.searchParams.get("duration")
    const selectedVip = vipsJson[vipId]

    const session = await stripe.checkout.sessions.create({
        line_items: [{
            price: selectedVip.stripe.single,
            quantity: duration
        }],
    
        mode: "payment",
    
        success_url: `${PUBLIC_API_URL}/payments/checkout/gift/success`,
        cancel_url: `${PUBLIC_API_URL}/payments/checkout/gift/cancel`
    }).catch(err => {
        console.log(err)
        return error(500, "Internal error")
    })

    if (!session) {
        return error(500, "Internal error")
    } else {
        return redirect(301, session.url as string)
    }
}