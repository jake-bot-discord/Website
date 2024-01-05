/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    colors: {
      "primary": {
        "1": "#ffae00",
        "2": "#fc9304"
      },
      "highlite": {
        "blue": "#046dfc",
        "red": "#ff1212"
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
      },

      animation: {
        fade: 'fadeIn .3s linear 1 forwards',
      },

      fontFamily: {
        "poppins": ["Poppins", "sans-serife"]
      }
    }
  },

  plugins: []
};