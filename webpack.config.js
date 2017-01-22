/*eslint-disable */

module.exports = {
	entry: {
    '01-get-started': './src/01-get-started.js',
    '02-switch': './src/02-switch.js',
    '03-mergeAll': './src/03-mergeAll.js',
    '04-concatAll': './src/04-concatAll.js',
    '05-switchMap': './src/05-switchMap.js',
    '06-mergeMap': './src/06-mergeMap.js'
  },
	output: {
    path: 'dist',
		filename: '[name]-bundle.js'
	},

	module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
	}
}