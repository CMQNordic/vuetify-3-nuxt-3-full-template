### `Nuxt-purgecss` is a plugin that removes unused css selectors from final bundle.

During build process it scans the source code (html, vue, js files) for classes and selectors and if found any, it keeps corresponding selector in the final bundle and removes others. In case of Vuetify selector names are created at build time with render functions 
and it is impossible for purgecss to determine what to keep.

### How to build
- Generate full static site (npm run generate), copy `dist` content to `statically-generated-dist-content` folder.
- Then use the copied `dist` in setting as input content to `nuxt-purgecss`

Then build your site for production.

### Note
Config.js can be used to add additional setting to nuxt-purgecss
as sometimes is needed when Vuetify creates classes and selector names at runtime.