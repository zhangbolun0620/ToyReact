module.exports = {
    mode: 'development',
    entry: {
        main: './main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [[
                            "@babel/plugin-transform-react-jsx",
                            {pragma: "toyReact.createElement"}
                        ]]
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: false
    }
}