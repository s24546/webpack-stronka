const path = require('path');

module.exports = {
mode: 'production',
entry: './src/index.js',
 output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
 },
 module: {
    rules: [
      {
        test: /\.js$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader',
       },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
 },
};

