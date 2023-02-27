#### Folder /plugins contains files that extend Vue functionality:
Each file here will be executed at start up just **after** creation of nuxt instance (vue.app).
Usually app configuration and various frameworks are loaded here.

#### For example: 
**Vuetify** framework is added to the project and configured here.

#### Order and place of execution
app.vue runs at start follwed by plugins in following order: 

`1.plugin.server.js` // first, on server only
`2.plugin.js`			// second, on client/server
`3.plugin.client.js` // third, on client only
`plugin.js`  			// executed last both on client/server

> **Note! Only files in root are automatically executed!**

