const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.js"],
  theme: {
    colors: {
      transparent: "transparent",
     
      white: {
        light: "#fff",
        DEFAULT: "#fff",
        dark: "#fff",
        90 : "rgba(255, 255, 255, 0.90)",
        75 : "rgba(255, 255, 255, 0.75)",
        50: "rgba(255, 255, 255, 0.5)",
        25: "rgba(255, 255, 255, 0.2)",
        10: "rgba(255, 255, 255, 0.1)"
      },
      grey: {
        light: '#E5E7EB',
        DEFAULT: '#9CA3AF',
        dark: '#4B5563',
      },
      black: {
        light: '#111',
        DEFAULT: "#000",
        dark: '#000000',
        90 : "rgba(0, 0, 0, 0.90)",
        75 : "rgba(0, 0, 0, 0.75)",
        50: "rgba(0, 0, 0, 0.5)",
        25: "rgba(0, 0, 0, 0.2)",
        10: "rgba(0, 0, 0, 0.1)"
      },
      
      navy: {
        lighter: "#9AA6B4",
        light: '#50687E',
        DEFAULT: "#163454",
        dark: '#14324D',
        darker: '#10283F'
      },
      gold: {
        light:'#FFD977',
        DEFAULT: '#FFCC4A',
        dark: '#BF9937'
      },
    },
    fontFamily: {
      serif: ['Playfair\\ Display', 'serif']
    },
    
    extend: {
      screens:{
        '320px': '320px',
        '375px': '375px',
        '425px': '425px',
        '768px': '768px',
        '1024px': '1024px',
        '1200px': '1200px',
        '1440px': '1440px',
        '1600px': '1600px',
        '1920px': '1920px',

      },
      fontSize: {
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "2.5rem", // 42px
        "6xl": "3rem", // 48px
        "7xl": "4rem", // 64px
        "8xl": "5rem", // 80px
        "9xl": "6rem", // 96px
        "10xl": "7rem", // 112px
        "11xl": "8rem",
        "12xl": "9rem",
        "13xl": "10rem",
        "14xl": "11rem",
        "15xl": "12rem",
        "16xl": "13rem",
        "17xl": "14rem",
        "18xl": "14rem",
        "19xl": "15rem",
        "20xl": "16rem"
      },
      width: {
        auto: "auto",
        px: "1px",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "16": "4rem",
        "24": "6rem",
        "32": "8rem",
        "48": "12rem",
        "64": "16rem",
        "1/2": "50%",
        "1/3": "33.33333%",
        "2/3": "66.66667%",
        "1/4": "25%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.66667%",
        "5/6": "83.33333%",
        full: "100%",
        screen: "100vw"
      },
    },
    options: {
      prefix: "",
      important: false,
      separator: ":"
    },

    variants: {
      extend: {
        backgroundColor: ["group-hover"]
      }
    }
  }
};
