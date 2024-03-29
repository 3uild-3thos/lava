// import staticAdapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess(),
  ],

  kit: {
    adapter: adapter(),
    paths: {
      relative: false,
    },
  },
};

export default config;
