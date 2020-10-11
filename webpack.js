const path = require('path');

module.exports = {
  mode: 'production',
  // 'entry' is the starting point for webpack.xxx.js
  // to start mapping out the file dependencies and where the application starts
  // executing, and where webpack starts bundling
  entry: [
    path.join(__dirname, './src/index.jsx'),
  ],
  output: {
    // 'path' is the target directory where the bundled files
    // will be output to (MUST be an ABSOLUTE path)
    path: path.join(__dirname, './dist/bundle'),
    // 'filename' is the filename of the intended output bundle
    filename: 'bundle.js',
  },
  // Configuration for modules
  module: {
    rules: [
      // Rules for .js / .jsx files
      {
        // 'test' is a regex expression to test for all files
        // that end with these extension(s)
        test: /\.jsx?$/,
        // 'include' is a path, whose files that we wish
        // to include when checking for this rule
        include: [path.resolve(__dirname, 'src')],
        // 'exclude' is a path, whose files that we wish to exclude
        // (so that it's faster) reading from
        exclude: [path.resolve(__dirname, 'node_modules')],
        // 'loader' is to indicate which loader to use
        // when reading in these files
        // Webpack, by default, can only read Javascript files
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
                '@babel/preset-env',
              ],
              plugins: [
                '@babel/transform-runtime',
              ],
            },
          },
        ],
      },
    ],
  },
  // 'resolve' are the options for resolving module requests
  resolve: {
    // And 'extensions' are the file extensions to be used
    extensions: ['.js', '.css', '.jsx'],
  },
  // 'devtool' are tools that we wish to use during development
  // In this case, "inline-source-map" notifies us of the specific file
  // (since all the files that we use will be bundled into 1 file, bundle.js)
  // that may be throwing an error
  devtool: 'inline-source-map',
};
