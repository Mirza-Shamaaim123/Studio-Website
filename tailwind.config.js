/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".src//components/*.{js,ts,jsx,tsx}", // If your components are in a separate folder
    "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js
  ],
  
  theme: {
    extend: {
      
    },
  },
  plugins: [],
}