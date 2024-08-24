module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{bmp,docx,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};