module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/assets/styles/styles.scss";`
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