# IM361 Web Project Setup

In order for the web project to work, you'll need to do the following.

1. `npm init` - the default values are fine
2. `npm install --save vue`
3. `npm install --save-dev webpack`
4. `npm install --save-dev webpack-cli`
5. Create files as specified below.
6. Run `npx webpack` to create `dist/main.js`
7. You can now open `index.html` in the browser.

### `src/index.js`

```JavaScript
import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

window.app = app;
```

### `.gitignore`

```
node_modules
package-lock.json
dist
```

### `index.html`

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>My Vue Project</title>
  </head>
  <body>
    <div id="app">
      {{ message }}
    </div>
    <script src="dist/main.js" type="text/javascript"></script>
  </body>
</html>
```
