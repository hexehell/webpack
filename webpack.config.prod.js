const HtmlWebPackPlugin = require('html-webpack-plugin');
const MinicssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports =
{
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  output:
  {
    filename: 'main.[contentHash].js',
    clean:true,

  },
  module: {
    rules: [
      {// html loader
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          // Disables attributes processing
          sources: false,
          minimize: true,
        },
      },
      {// css loader
        test: /\.css$/i,
        exclude: /02_styles\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      { //MinicssExtractPlugin
        test: /02_styles\.css$/i,

        use: [MinicssExtractPlugin.loader, "css-loader"],
      },
      { //file_loader
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',

          },
        ],
      },
      {// babel loader
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },

  plugins:
    [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      }),
      new MinicssExtractPlugin({
        filename: 'styles.css',


      }),
      new CopyPlugin({
        patterns: [
          { from: "src/assets/img/**/*" }
          // { from: "other", to: "public" },
        ],
      }),
    
    ]
}