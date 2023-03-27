/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-pic': "url('/bg-128x128.png')",
      },
    },
    screens: {
      lg: { max: '1440px' },
      md: { max: '960px' },
      tablet: { max: '768px' },
      fablet: { max: '480px' },
      small: { max: '375px' },
    },
  },
  plugins: [],
};
