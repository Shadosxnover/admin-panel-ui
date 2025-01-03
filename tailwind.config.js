module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ff6700',
        secondary: '#3a6ea5',
        accent: '#004e98',
        neutral: '#c0c0c0',
        light: '#ebebeb',
        dark: {
          bg: '#121212',
          surface: '#1e1e1e',
          accent: '#2d2d2d',
        },
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(45deg, transparent, #ff66005e)',
      },
      transitionProperty: {
        'smooth': 'all',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'smooth': '300ms',
      },
      boxShadow: {
        'elevation': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

