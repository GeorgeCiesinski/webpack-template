const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    test: './src/multiple.js'
  },
  plugins: [
    new HtmlWebpackPlugin({  
      title: "Template",  // Creates a new index.html file from the template
      template: "./src/template.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',  // For multiple entry points
  }
};