# IM361 Web Project Setup, Part 1

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

# IM 361 Web Project Setup, Part 2

1. Add new dependencies with `npm install --save-dev style-loader css-loader`
1. Add a `webpack.config.js` file and copy from below
1. Add a `src/style.css` file and copy from below
1. Update your `package.json` file and add lines from below
1. Add `import "./style.css";` to the top of your `src/index.js` file

## `webpack.config.js`

```JavaScript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
```

## `src/style.css`

```css
* {
  color: red;
}
```

## `package.json`

Update from this:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

And change to this:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "webpack --mode development"
}
```
