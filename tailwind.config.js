module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}
