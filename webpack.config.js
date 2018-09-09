const path = require('path');

module.exports = {
    mode: 'none',
    entry:{
        marked: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        libraryTarget: "umd",
        library: "marked"
    },
    module:{
        rules:[
            {
                test:/\.md$/,
                loader:'text-loader'
            }
        ]
    },
};
