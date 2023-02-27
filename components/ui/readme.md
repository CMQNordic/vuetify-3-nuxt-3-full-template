# App widgets
Small **dummy componets** for diffrent UI purposes. Each component is for one single task (purpose) and do not contain any statefull application logic. Usually used to wrap project specific styles and design **commonly used elements** like buttons, cards, texts. It often wraps external framework components (here **Vuetify**) so that it is easy to change framework by doing changes only here in the app components and not in other parts of the code.

### app-box

A `<div>` box (content wrapper) is created and 'width' | 'height' set its max dimensions. Default  is `width:100%`  and `height:auto` meaning it horizontally fills its parent and vertically height is expanding with content. No margins nor paddings are applied.

Use 'vw/vh' | 'px' | '%' to set the dimensions of the box (do not use more than 100%).  
Use 'align-left' | 'align-right' align the box horizontally.
The box is by default horizontally centered, if its width is smaller than the parent.

Content of the box is by default wrapped in a `div` element. Use 'tag' to change type of this element i.e tag="button" creates `<button><slot /></button>`. To align content within box with use props:
'left' _(default if unset)_ | 'center' | 'right'  
'top' _(default if unset)_ |  'middle' | 'bottom' 
'centered' (a shortcut for center & middle) 

> By default:
> 100% wide vertically expanding `div` box. Content wrapped in other div shrinked too the content. Content and box align left/top. No background content. No paddings nor margins. Texts are wrapped and broken if needed.

Examples:
```html
<!-- Text horizontally centered in the parent -->
<app-box center> Text </app-box>

<!-- Text in the middle of the parent (horizontally & vertically centered) -->
<div style="width: 400px; height: 400px">
   <app-box centered>
      Centered text
   </app-box>
<div>
	
<!-- Button to the right in its parent -->
<app-box tag="v-button" middle right>
   Press me
</app-box>

<!-- Vertically stretched background (fullscreen)  with text in the middle -->
<!-- Background is set (color or dark img).                                -->
<!-- With b-dark we force text  top f image background have light contrast -->
<app-box tag="h1" centered width="100vw" height="300px" b-dark>
   Welcome to <b>our</b> page!
   <template #background>
      <img src="img" class="img-background-color" />
   </template>
</app-box>
``` 	

- ### app-dialog

- ### app-icon

- ### app-tabs
This components creates tabs based on unique texts or language keys. Those are used as tab texts. Subsequently each tab executes appropriate component provided in default slot.

Example. Providing 2 components (a & b) with tab languageKeys lKey_a & lKey_b 
```html
<app-tabs v-slot="{tab}" :tabs="['lKey_a', 'lKey_b']">
	<component-a v-if="tab == 'lKey_a'" />
	<component-b v-if="tab == 'lKey_b'" />
</app-tabs>
```

- ### app-progress
 
Shows progress in the middle of an greyed-out overlay with locked scrolling. There is a button to close this progress overlay and when pressed 'close' event is emitted.

By default this overlay is contined in closest parent with class 'app-progress-wrapper' (position: relative)

We can activate the progress in following ways. 

1. By defining an activator. 
	In those cases we handle closing of the progress internally. No need to listen to 'close'.
	Example:
```html
<app-progress  activator="parent" | activator="#id-of-activator-button" />
```
2. Or by binding with `v-model` to a boolean value.
	In this case we must listen to 'close' to hide the progress.
	Example:
```html
<app-progress v-model='showProgress' @close='showProgress = false' fullscreen />
```


fullscreen => if set then the progress overlay takes up whole screen.