const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new SWPrecacheWebpackPlugin({
                cacheId: 'eetsw',
                filename: 'service-worker-cache.js',
                staticFileGlobs: ['dist/**/*.{js,css}'],
                minify: true,
                stripPrefix: 'dist/',
                dontCacheBustUrlsMatching: /\.\w{6}\./
            })
        ]
    }
};