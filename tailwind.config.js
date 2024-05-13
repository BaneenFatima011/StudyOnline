/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': '332px',
        'sm': '632px',
        'md': '832px',
        'lg': '1032px',
        'xl': '1232px',
        '2xl': '1432px',
      },
    },
  },
 

  
  plugins: [
    
      function ({ addUtilities }) {
        const newUtilities = {
          '.border-gradient': {
            'border-image': 'linear-gradient(90deg, #3b82f6, #9333ea)',
            'border-image-slice': 1,
          },
        };
  
        addUtilities(newUtilities, ['responsive', 'hover']);
      },
   
  ],
}

