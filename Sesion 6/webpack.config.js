const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    //el archivo principal de todo el proyecto
    entry:'/index.js',
    output: {
        //La salida se va a llamar bundle.js
        //va a mezclar todos los archivos en bundle
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    //dependencias para leer txt
    module: {
        rules: [
          { test: /\.css$/, use: 'css-loader' }
        ] 
    },
      plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}