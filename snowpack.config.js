module.exports = {
  extends: "@snowpack/app-scripts-svelte",
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    [
      "@snowpack/plugin-build-script",
      { cmd: "postcss", input: [".css"], output: [".css"] },
    ],
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-postcss",
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    installTypes: true,
    // rollup: { 
    //   plugins: [
    //     require('rollup-plugin-svelte')()
    //   ] 
    // }
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    clean: true,
    bundle: true
  },
  proxy: {
    /* ... */
  },
  alias: {
    '@': './src'
  },
};