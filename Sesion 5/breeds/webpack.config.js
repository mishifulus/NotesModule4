module.exports =
{
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    //para permitir los css
    //loader permite cargar cosas que no sean JS o JSON
    module: {
        rules: [
            {
                //extensiones a soportar
                test: /\.css$/i,
                //que usara para cargar los css
                use: ['style-loader','css-loader']
            }
        ]
    }
}