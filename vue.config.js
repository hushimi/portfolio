module.exports = {
	css: {
		loaderOptions: {
			scss: {
				additionalData: '@import "~@/assets/styles/styles.scss";'
			},
		}
	},
	publicPath: '/portfolio',
	outputDir: 'docs',
	configureWebpack: {
		performance: {
			hints: false,
		}
	},
}