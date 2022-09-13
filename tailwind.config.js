module.exports = {
  mode:'jit',
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'seconds_bg': "url('/public/images/bg2.jpg')",
      }
    },
  },
  plugins: [],
}
