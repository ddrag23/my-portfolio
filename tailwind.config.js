const production = !process.env.ROLLUP_WATCH;
module.exports = {
  purge: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  purge: {
    content: ['./src/**/*.svelte'],
    enabled: production, // disable purge in dev
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
