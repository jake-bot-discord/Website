import { goto } from '$app/navigation';
import { PUBLIC_API_URL } from '$env/static/public';
import axios from 'axios';

export async function load({ params, cookies }) {
    const SessionCookie = cookies.get("session.id")

    if (!SessionCookie) {
        return goto("/")
    }
    
    const res = await axios.request({ 
        url: `${PUBLIC_API_URL}/auth/session`,
        method: "GET",
        headers: {
            "Cookie": `session.id="${SessionCookie}"`
        }
    })

    if (!res.data) {
        return goto("/")
    }

    const { data: invoicesReqData } = await axios.get(
        `${PUBLIC_API_URL}/payments/retrieve/invoices`, 
        { 
            headers: {
                "Cookie": `session.id="${SessionCookie}"`
            }        
        }
    );
    
    const { data: subscriptionReqData } = await axios.get(
        `${PUBLIC_API_URL}/payments/retrieve/subscription`, 
        { 
            headers: {
                "Cookie": `session.id="${SessionCookie}"`
            }        
        }
    );

    if (invoicesReqData && subscriptionReqData) {
        return {
            billingData: invoicesReqData,
            subscriptionData: subscriptionReqData
        }
    }
}