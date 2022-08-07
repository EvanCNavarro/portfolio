/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,

      teal: "#00D3D3",
      offWhite: "#F4F4F4",
      offGray: "#939393",
      offBlack: "#262626",
      offBeige: "#F0EDEB",
    },
    fontSize: {
      4: "0.25rem",
      8: "0.5rem",
      12: "0.75rem",
      16: [
        "1rem",
        {
          letterSpacing: "-0.0125rem",
          lineHeight: "1.5rem",
        },
      ],
      20: "1.25rem",
      24: [
        "1.5rem",
        {
          letterSpacing: "-0.0125rem",
          lineHeight: "2.25rem",
        },
      ],
      28: [
        "1.75rem",
        {
          letterSpacing: "-0.0125rem",
          lineHeight: "2.25rem",
        },
      ],
      32: [
        "2rem",
        {
          letterSpacing: "-0.0125rem",
          lineHeight: "2.5rem",
        },
      ],
      36: "2.25rem",
      40: "2.5rem",
      44: "2.75rem",
      48: "3rem",
      52: "3.25rem",
      56: "3.5rem",
      60: "3.75rem",
    },

    extend: {
      screens: {
        "m-360": "360px",
        "m-400": "400px",
        "m-440": "440px",
        "m-480": "480px",

        "t-600": "600px",
        "t-640": "640px",
        "t-680": "640px",
        "t-720": "720px",
        "t-760": "760px",
        "t-800": "800px",
        "t-840": "840px",
        "t-880": "880px",
        "t-920": "920px",
        "t-960": "960px",

        "d-1000": "1000px",
        "d-1200": "1200px",
        "d-1300": "1300px",
        "d-1400": "1400px",
        "d-1500": "1500px",
        "d-1600": "1600px",
        "d-1700": "1700px",
        "d-1800": "1800px",
        "d-1900": "1900px",
        "d-2000": "2000px",
      },
      spacing: {
        0: "0.0rem",
        4: "0.25rem",
        8: "0.5rem",
        12: "0.75rem",
        16: "1rem",
        20: "1.25rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
        36: "2.25rem",
        40: "2.5rem",
        44: "2.75rem",
        48: "3rem",
        52: "3.25rem",
        56: "3.5rem",
        60: "3.75rem",
        64: "4rem",
        68: "4.25rem",
        72: "4.5rem",
        76: "4.75rem",
        80: "5rem",
        84: "5.25rem",
        88: "5.5rem",
        92: "5.75rem",
        96: "6rem",
        100: "6.25rem",
        104: "6.5rem",
        112: "7rem",
        120: "7.5rem",
        128: "8rem",
        136: "8.5rem",
        144: "9rem",
        152: "9.5rem",
        160: "10rem",
        168: "10.5rem",
        176: "11rem",
        184: "11.5rem",
        192: "12rem",
        200: "12.5rem",
        208: "13rem",
        216: "13.5rem",
        224: "14rem",
        232: "14.5rem",
        240: "15rem",
        248: "15.5rem",
        256: "16rem",
        264: "16.5rem",
        272: "17rem",
        280: "17.5rem",
        288: "18rem",
        296: "18.5rem",
        304: "19rem",
        312: "19.5rem",
        320: "20rem",
        328: "20.5rem",
        336: "21rem",
        344: "21.5rem",
        352: "22rem",

        360: "22.5rem",
        400: "25rem",
        440: "27.5rem",
        480: "30rem",

        600: "37.5rem",
        640: "40rem",
        680: "42.5rem",
        720: "45rem",
        760: "47.5rem",
        800: "50rem",
        840: "52.5rem",
        880: "55rem",
        920: "57.5rem",
        960: "60rem",

        1000: "62.5rem",
        1200: "75rem",
        1300: "81.25rem",
        1400: "87.5rem",
        1500: "93.75rem",
        1600: "100rem",
        1700: "106.25rem",
        1800: "112.5rem",
        1900: "118.75rem",
        2000: "125rem",
      },
    },
  },
  plugins: [],
};
