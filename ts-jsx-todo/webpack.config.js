module.exports = {
	entry: './src/index.tsx',
	output: {
	  path: path.resolve(__dirname, build),
	  filename: 'bundle.js'
	},
	module: {},
	plugins: []
}
