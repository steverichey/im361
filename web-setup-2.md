# IM 361 Web Project Setup, Part 2

1. Add a `webpack.config.js` file and copy from below
2. Add a `src/style.css` file (leave empty for now)
3. Update your `package.json` file and add lines from below

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
