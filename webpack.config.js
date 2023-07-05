const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HBO',
			template: './src/index.html'
    }),

    
  ], 
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
		assetModuleFilename: 'assets/images/[name][ext]'
  },
//   optimization: {
//     runtimeChunk: 'single',
//   },
  module: {
    rules: [
			{
				test: /\.html$/i,
				use: 'html-loader'
		},
		{
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				//generator: {
				//		filename: 'images/[name]-[hash][ext]',
				//}
		},
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', "sass-loader",],
      },
			{ 
				test: /\.txt$/, 
				use: 'raw-loader' 
			}
    ],
  },
};

