/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        screens: {
          'sm': '375',
          'md': '819',
          'lg': '1024px', 
          'xl': '1340px',  
        }, 
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}