module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      './src/**/*.ts',
      './src/**/*.svelte',
      './src/**/*.html',
      './src/**/*.js'
    ],
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
};
