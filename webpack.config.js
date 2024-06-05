const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
      {
        /* The following line to ask babel 
             to compile any file with extension
             .js */
        test: /\.js?$/,


        /* exclude node_modules directory from babel. 
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,


        // To Use babel Loader
        loader:
          'babel-loader',
        options: {
          presets: [
            '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
            '@babel/preset-react',
          ], // to compile react to ES5
        },
      },
    ],
  },


  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'MFE2',
        filename:
          'remoteEntry.js',
          remotes: {
            MFE1: 'MFE1@http://localhost:8083/remoteEntry.js',
            MFE2Footer: 'MFE2Footer@http://localhost:8084/remoteEntry.js', // Added entry for the footer
          }
          
      }
    ),
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
  ],
}; 