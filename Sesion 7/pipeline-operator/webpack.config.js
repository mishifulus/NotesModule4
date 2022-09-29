module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: ["babel-loader"]
            }
        ]
    }
}