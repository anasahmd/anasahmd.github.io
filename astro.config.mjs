import { defineConfig } from 'astro/config';
import serviceWorker from 'astrojs-service-worker';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), serviceWorker()],
});
