const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Entry point 
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile JS/JSX files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Use presets for env and react
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },  
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] 
  }
};
