const presets = [
    [
        "@babel/env", {
        modules: false,
            targets: {
                browsers: ['last 2 versions', 'safari >= 7']
            }
        }
    ],
];

module.exports = { presets };