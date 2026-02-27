import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/routes/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        krono: ["Krono", "sans-serif"],
        poppinsItalic: ["Poppins Italic", "sans-serif"],
        poppinsSemiBoldItalic: ["Poppins Semi Bold Italic", "sans-serif"],
        poppinsMedium: ["Poppins Medium", "sans-serif"],
        poppinsBold: ["Poppins Bold", "sans-serif"],
        merriweatherBoldItalic: ["Merriweather Bold Italic", "serif"],
        merriweatherBold: ["Merriweather Bold", "serif"],
        urbanistSemiBold: ["Urbanist Semi Bold", "sans-serif"]
      }
    },
  },
  plugins: [
    function({ addUtilities }: any) {
      addUtilities({
        '.font-poppinsSemiBoldItalic': {
          'font-family': 'Poppins Semi Bold Italic, sans-serif',
        },
        '.font-poppinsMedium': {
          'font-family': 'Poppins Medium, sans-serif',
        },
        '.font-poppinsBold': {
          'font-family': 'Poppins Bold, sans-serif',
        },
        '.font-krono': {
          'font-family': 'Krono, sans-serif',
        },
      });
    },
  ],
} satisfies Config;
