/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor : {
        'primary' : '#77BBE2',
        'soft-gray' : '#FAFAFA'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '50%':{
            opacity: '0.5',
            transform: 'translateY(5px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)'
          },
          '50%':{
            opacity: '0.5',
            transform: 'translateX(5px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)'
          },
          '50%':{
            opacity: '0.5',
            transform: 'translateX(-5px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down .7s ease-out',
        'fade-in-left': 'fade-in-left .7s ease-out',
        'fade-in-right': 'fade-in-right .7s ease-out',
      }
    },
  },
  plugins: [],
};
