#### This folder contain files that extend Vue functionality:
Each file that is placed here will be automatically executed at start up. Usually app configuration and various frameworks are initiated (loaded) here.

**Vuetify** framework is added to the project and configured here.
Font Awesome icons and svg functions are added to the project here.
FA functions:
- fa-spin
- fa-shake
- fa-pulse
- fa-beat
- fa-fade
- fa-swap-opacity
- fa-beat-fade
- fa-spin-pulse
- fa-border
- fa-li
- fa-inverse
- fa-rotate
- fa-rotate-90/180/270
- fa-pull-right/left
- size-2x/3x/4x...10x.


#### Order and place of execution
app.vue runs at start follwed by plugins in following order: 

`1.plugin.server.js` // first, on server only
`2.plugin.js`			// second, on client/server
`3.plugin.client.js` // third, on client only
`plugin.js`  			// executed last both on client/server

> **Note! Only files in root are automatically executed!**

