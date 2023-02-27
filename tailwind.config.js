module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: 'jit',
  purge: ['./src/**/*.{html,js,jsx}', './public/**/*.{html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        sunset: '#ffce3f',
        blue: {
        deepBlue: '#06304b',
        surfaceBlue: '#0094b6',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
