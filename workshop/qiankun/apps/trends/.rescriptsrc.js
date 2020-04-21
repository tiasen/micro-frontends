const { name } = require('./package');

module.exports = {
    webpack: (config) => {
        config.output.library = `${name}-[name]`;
        config.output.libraryTarget = 'umd';
        config.output.jsonpFunction = `webpackJsonp_${name}`;
        config.output.publicPath = 'http://localhost:8005';

        return config;
    },

    devServer: (_) => {
        const config = {};

        // config.port = '8505';
        config.headers = {
            'Access-Control-Allow-Origin': '*',
        };
        config.historyApiFallback = true;

        config.hot = false;
        config.watchContentBase = false;
        config.liveReload = false;

        return config;
    },
};
