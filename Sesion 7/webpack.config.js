module.exports =
{
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                //Soporte de extensiones .mjs y .js
                test: /\.m?js$/,
                //No tomar en cuenta la carpeta de node_modules
                exclude: /node_modules/, 
                //Configuracion de Babel
                use: {
                    loader: 'babel-loader',
                    options: {
                        //Incluye el plugin llamado babel preset-env
                        //Permite utilizar las caracteristicas de ES2015+
                        presets: ['@babel/preset-env'],
                        
                    }
                }
            }
        ]
    }
}