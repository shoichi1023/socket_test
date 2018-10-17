var path = require("path");

module.exports = {
    target: "web",
    entry: ["babel-polyfill", "./public/src/index.jsx"],
    output: {
        path: path.join(__dirname, "public/dist"),
        publicPath: "/public/dist/",
        filename: "bundle.js"
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }
            }
        ]
    },
    plugins: [],
    cache: true,
    mode: "development"
};