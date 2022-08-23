module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme:  {
    extend: {
      colors: {
        white:{
          default:"#FFFFFF",
          light:"#F1F1F1",
          grey:"#92929D",
          vgrey:"#F1F1F6",
        },
        black:{
          main:"#11142D",
        },
        orange:{
          main:"#FF8B4A",
        },
        green:{
          main:"#00B1B9",
        },
        
  
    
      },
    },
    screens: {
      xs: '640px',
       sm: '768px',
       md: '1024px',
       lg: '1280px',
       xl: '1600px',
     },
     fontSize: {
      'xs': '12px',
      'sm': '14px',
      'base':'16px', 
      'lg':'20px', 
      'xl':'24px',
      '2xl':'26px',
      '3xl':'32px',
      '4xl':'48px',
      '5xl':'',
      '6xl':'62px',
      
      

    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
