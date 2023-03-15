### Vue 3 + Nuxt 3 + Vuetify 3 project template
xxx
Use this as base for your project to save TONS of time. Easy to use and easy to extend. It has been well tested and optimized for performance and bundle size in production.

##### ✅ Watch the introduction video - [here](#TODO)
##### ✅ See this project live - [here](#TODO)

### Build for production
When building for production we automatically remove all `console.log()` by help of TODO. 
Therefore some critical asserts and debug logs aimed only for development builds are added with:
- console.log(**null.DEV_ASSERT**_something_bad_happened);

### Customization
In folder **`app/`** you find all files where we easily can customize large parts of this project:
- app-customization.js & app-customization.css
- navigation-items.js
- languages.js
- themes.css
- icons.js

### **Note!**
- When navigating to routes always use **$tPath(path)** (in `<template>`) or **useLanguages().tPath(path)** (in `<script>`) to receive path with correct locale added, based  on active language.
- For any any visual texts use **$t(lKey)** (in `<template>`) or **useLanguages().t(lKey)** (in `<script>`) to get the correct text based on active language.

### This starter implements
- **Application customization**
  Easily customize main parts of the app including supported languages from one place (`app/` folder)
  
- **Postcss plugins**
  Sets up usefull postcss plugins: **postcss-mixins**, **postcss-nested**, **postcss-simple-vars** (`nuxt.config.ts`)
  
- **Vuetify theme customization**
  Easily and visually change theme or parts of theme to be applied (`app/themes.css`)

- **JS treeshaking**
  Automatically remove unused javascript code from production bundle (main parts automatically done by **vite** already) 
  
- **CSS treeshaking**
  Automatically remove unused css selectors from production bundle with help of pre-configured **nuxt-purgecss** plugin.
  
- **Vuetify treeshaking**
  Removes unused components & directives from production bundle with help of pre-configured **vite-plugin-vuetify**. 

 - **Icons** 
Added support for embedded svg as vue components, Material Design SVG Icons (MDI, default) and Font awesome icons (FA). (`app/icons.js`)
  