# IM 361 Web Project Setup, Part 2

1. Add new dependencies with `npm install --save-dev style-loader css-loader`
1. Add a `webpack.config.js` file and copy from below
1. Add a `src/style.css` file (leave empty for now)
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
