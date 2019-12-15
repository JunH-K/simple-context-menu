const path = require( 'path' );

module.exports = {
  // entry: ['@babel/polyfill', './src/js/main.js'],
  entry: './src/js/index.js',
  output: {
    path: path.resolve( __dirname, 'dist' ),
    publicPath: 'dist/',
    filename: 'contextMenu.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve( __dirname, 'src/js' )
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      { test: /\.hbs$/, loader: 'handlebars-loader' }
    ]
  },
  devtool: 'source-map',
  mode: 'development'
};
