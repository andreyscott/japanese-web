/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: "#9D1515",
        base: "#E7E7E7",
        tblack: "#121212",
        lblack: "#222222"
      },
    },  
    animation: {
      blob: "blob 7s infinite",
      blob2: "blob2 10s infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite",
    },
    keyframes: {
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
          filter: "blur(2px)",
        },
        "33%": {
          transform: "translate(30px, -30px) scale(1.1)",
          filter: "blur(0px)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)",
          filter: "blur(2px)",
        },
        "100%": {
          transform: "tranlate(0px, 0px) scale(1)",
          filter: "blur(1px)",
        },
      },
  pulse: {
  "0%": {
    opacity: 1,
  },
"50%": {
    opacity: .5,
  },
"100%": {
    opacity: 1,
},

},

bounce: {
  "0%, 100%": {
    transform: "translateY(-25%)",
    animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
  },
  "50%": {
    transform: "none",
    animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
  },
},

      blob2: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
          filter: "blur(2px)",
        },
        "50%": {
          transform: "translate(20px, -20px) scale(1.1)",
          filter: "blur(0px)",
        },
        "100%": {
          transform: "tranlate(0px, 0px) scale(1)",
          filter: "blur(1px)",
        },
      },
    }, 

  },
  plugins: [],
}