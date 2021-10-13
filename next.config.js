const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	assetPrefix: isProd ? 'https://cyberangel99.github.io/readaway/' : ''
}