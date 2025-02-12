const path = require('path')

module.exports = {
    entry: './09-bundler/src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(`${__dirname}/09-bundler`, 'dist')
    },
    mode: 'development',
}