const path = require("path");


module.exports = {
	entry: './src/index.tsx',
	output: {
	  path: path.resolve(__dirname, "build"),
	  filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: "awesome-typescript-loader"
			}
		]
	},
	plugins: [],
	mode: "development"
}
