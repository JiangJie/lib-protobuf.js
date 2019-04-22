module.exports = api => {
    api.cache(false);

    const presets = [
        // '@babel/preset-stage-0',
        ['@babel/preset-env', {
            debug: true
            // exclude: [
            //     'transform-arrow-functions',
            //     'transform-destructuring',
            //     'transform-block-scoping',
            //     'transform-shorthand-properties',
            //     'transform-spread',
            //     'transform-destructuring'
            // ]
        }]
    ];

    const plugins = [
        ['@babel/plugin-transform-runtime', {
            corejs: false,
            helpers: true,
            regenerator: true,
            useESModules: false
        }],
        '@babel/plugin-transform-modules-commonjs'
    ];

    return {
        presets,
        plugins
    };
};