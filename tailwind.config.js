const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./app/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'current',
        gray: colors.neutral,
        indigo: colors.indigo,
        purple: colors.purple,
    }
  },
    plugins: []
  }
}
