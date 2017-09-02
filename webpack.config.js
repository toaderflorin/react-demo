const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: './src/index.html',
//   filename: 'index.html',
//   inject: 'body'
// })

module.exports = {
  entry: './src/static/app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'src/static'),
    filename: 'bundle.js',
  },
  // loaders: [
  //   // {
  //   //   test: /\.jsx$/,
  //   //   loader: 'jsx-loader?insertPragma=React.DOM&harmony'
  //   // }
  // ]
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    // HtmlWebpackPluginConfig
  ]
}
