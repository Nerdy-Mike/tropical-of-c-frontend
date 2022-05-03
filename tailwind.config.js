module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      },
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      height: {
        '512': '512px',
        '564': '564px',
        '50': '50vh',
      },
      width: {
        '446': '446px',
        '490': '490px',
      },
      grayscale: {
        30: '30%',
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}
