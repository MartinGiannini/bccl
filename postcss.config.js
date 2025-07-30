export default {
  // Use the PostCSS version of Tailwind. The tailwindcss package no longer exposes
  // a PostCSS plugin directly, so we reference the dedicated '@tailwindcss/postcss'
  // package here. Autoprefixer remains unchanged.
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};