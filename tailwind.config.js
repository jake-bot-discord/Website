/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: "class",

    theme: {
        colors: {
            "primary": "#fc9304",
            "highlite": {
                "blue": "#046dfc",
                "red": "#ff1212",
                "green": "#5aa900"
            },
            "white": "#fff",
            "gray": {
                "1": "#555",
                "2": "#9e9e9e"
            },

            "theme": {
                "light": {
                    "background": "#fff",
                    "text": "#515151"
                },

                "dark": {
                    "background": "#303030",
                    "text": "#fff"
                }
            }
        },

        extend: {
            keyframes: {
                fadeIn: {
                    '0%': {
                        opacity: "0%"
                    },

                    '100%': {
                        opacity: "100%"
                    }
                },

                slideRight: {
                    "0%": {
                        opacity: "0%",
                        transform: "translateX(300px)"
                    },

                    "100%": {
                        opacity: "100%",
                        transform: "translateX(0)"
                    }
                },

                slideLeft: {
                    "0%": {
                        opacity: "0%",
                        transform: "translateX(-300px)"
                    },

                    "100%": {
                        opacity: "100%",
                        transform: "translateX(0)"
                    }
                },

                slideBotton: {
                    "0%": {
                        opacity: "0%",
                        transform: "translateY(100px)"
                    },

                    "100%": {
                        opacity: "100%",
                        transform: "translateY(0)"
                    }
                },

                slideTop: {
                    "0%": {
                        opacity: "0%",
                        transform: "translateY(-100px)"
                    },

                    "50%": {
                        opacity: "0%",
                        transform: "translateY(-30px)"
                    },

                    "100%": {
                        opacity: "100%",
                        transform: "translateY(0)"
                    }
                }
            },

            animation: {
                fade: 'fadeIn .2s linear 1 forwards',
                slideRight: 'slideRight .4s linear 1 alternate',
                slideLeft: 'slideLeft .4s linear 1 alternate',
                slideBotton: 'slideBotton .4s linear 1 alternate',
                slideTop: 'slideTop .4s linear 1 alternate',
            },

            fontFamily: {
                "poppins": ["Poppins", "sans-serife"]
            }
        }
    },

    plugins: []
};