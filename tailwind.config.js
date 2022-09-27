/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        'white-main':'#ffffff',
        'light-violet':'#dedddf',
        'dark-violet':'	#8e8593',
        'very-dark-violet':'	#21092f',
      },
      backgroundImage:{
        'back_mobile': "url('../img/bg-main-mobile.png')",
        'back_main': "url('../img/bg-main-desktop.png')",
        'back_mobile_card': "url('../img/bg-card-back.png')",
        'front_mobile_card': "url('../img/bg-card-front.png')"
      },
      backgroundSize:{
      
      },
      spacing:{
        '85%':'85%',
        '9':'2.25rem',
        '23':'5.75rem',
        'mobile_width': '19.75rem',
        'mobile-heigth':'11.0rem'  
      },
      fontSize:{
          'size_mobile':'1.2rem',
          'size_mobile2':'.6rem'
      },
      fontFamily:{
        'teste':'Space Grotesk'
      }
    },
  },
  plugins: [],
}
