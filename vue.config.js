module.exports = {
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();

        svgRule
            .use('babel-loader')
            .loader('babel-loader') // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/responsive-adaptive-page/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/assets/scss/_devices.scss";'
            }
        }
    }
};