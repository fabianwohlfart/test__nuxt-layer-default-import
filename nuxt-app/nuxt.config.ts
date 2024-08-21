// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'node:path'
const layer = resolve('.', '..', 'nuxt-layer')

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  extends: [
    layer
  ],
  alias: {
    '@layer': layer
  },
  devServer: {
    port: 3333
  },
})
