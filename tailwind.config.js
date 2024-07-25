/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#25DAC5',
        customBlue: '#1DA1F2',
        customRed: '#EA3223',
        customPink: '#E93A7D',
      },
      fontFamily: {
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
