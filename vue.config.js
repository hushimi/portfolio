module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/assets/styles/variables.scss";`
            },
        }
    },
    publicPath: './',
    configureWebpack: {
        performance: {
            hints: false,
        }
    },
}