module.exports = {
	//入口文件
	entry: "./entry.js",
	output: {
		//输出目录，路径为绝对路径:__dirname
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader',
		}, {
			test: /\.scss$/,
			exclude: /node_modules/,
			loader: "style-loader!css-loader!sass-loader"
		}]
	}
};