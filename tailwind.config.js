module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'patricks-blue': '#353271ff',
        'dark-magenta': '#8a2e9eff',
        'brilliant-rose': '#fc5fa3ff',
        'lapis-lazuli': '#2a5c8dff',
        'blue-jeans': '#0aadffff',
        'dark-mangenta-2' : '#933a60'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
