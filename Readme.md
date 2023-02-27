### Optimized starter for Vue 3 + Nuxt 3 + Vuetify 3 project.
Using it as a base for your project will save you TONS of time. Easy to use and easy to extend. It has been well tested and optimized for performance and bundle size in production.

##### ✅ Watch the introduction video - [here](#TODO)
##### ✅ See this project live - [here](#TODO)

### Build for production
When building for production we automatically remove all `console.log()`. 
Therefore some critical asserts and debug logs aimed only for development builds are added with:
- console.log(**null.DEV_ASSERT**_something_bad_happened);
- console.log('**DEBUGGING**', 'Something intresting to observe');

### Customization
In folder **`app-customization/`** there you find all files where you easily can customize large parts of this project:
- app.vue/app.js
- navigation-items.js
- languages.js

**Note!**
- When adding navigation always use **$tPath(path)** or **useLanguages().tPath(path)** to receive with corret path based  on active language.
- When any any visual text use **$t(lKey)** or **useLanguages().t(lKey)** to get the correct text based on active language.

### This starter is implementing
- **Application customization**
  Easily customize main parts of the app including supported languages from one place (`app-customization/` folder)
  
- **Postcss plugins**
  Sets up usefull postcss plugins: **postcss-mixins**, **postcss-nested**, **postcss-simple-vars**
  
- **Vuetify theme customization**
  Easily and visually change theme or parts of theme to be applied 

- **JS treeshaking**
  Automatically remove unused javascript code from production bundle (main parts automatically done by **vite** already)
  
- **CSS treeshaking**
  Automatically remove unused css selectors from production bundle with help of pre-configured **nuxt-purgecss** plugin.
  
- **Vuetify treeshaking**
  Removes unused components & directives from production bundle with help of pre-configured **vite-plugin-vuetify**. 

 - **Tests** 
  Automatically run pre-build tests to make sure main parts of the application work as expected.
  