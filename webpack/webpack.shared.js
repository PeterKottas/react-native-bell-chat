const path = require('path');
const babel = require('babel-loader');

const resolver = (moduleName) => moduleName.map(item => path.resolve(__dirname, 'node_modules/' + item))

const babelLoader = {
    test: /\.(js|jsx)$/,
    include: resolver([
        'react-native-button'
    ]),
    use: babel
};

module.exports = { babelLoader };