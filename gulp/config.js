module.exports = {
	projectName: 'asatrans',

	// Path settings
	pathTo: {
		Src: {
			Styles: 'src/less/[^_]*.{less,css}',
			Jade: 'src/jade/**/[^_]*.jade',
			Images: ['src/img/**/*.*', '!src/img/sprite/*.*', '!src/img/favicon/*.*'],
			PngSprite: 'src/img/sprite/**/*.png',
			GHPages: 'dist/**/*',
			JS: 'src/js/**/[^_]*.*',
			BowerJSVendor: 'src/js/vendor/',
			BowerJSCustom: 'src/js/custom/',
			JSCustom: 'src/js/custom/**/*.js',
			CSSVendor: 'src/less/vendor/',
			Txt: ['src/humans.txt', 'src/robots.txt', 'src/.htaccess'],
			Fonts: 'src/fonts/**/*',
			Svg: ['src/svg/**/*.*', '!src/svg/sprite/*.*'],
			SvgSprite: 'src/svg/sprite/**/*.svg',
			Favicon: 'src/img/favicon/favicon.png'
		},
		Build: {
			Styles: 'dist/css',
			Html: 'dist/',
			Jade: 'dist/*.html',
			Images: 'dist/img',
			PngSprite: 'dist/img',
			PngSpriteCSS: 'src/less/blocks',
			JS: 'dist/js',
			Txt: 'dist/',
			Clean: ['dist/**/*', '!dist/.gitignore'],
			Fonts: 'dist/fonts',
			Svg: 'dist/svg',
			SvgSprite: 'dist/img',
			SvgSpriteNoSvg: 'dist/svg/sprite/svg-sprite.png',
			Favicon: 'dist/img/favicons/',
			FaviconInject: 'dist/*.html'
		},
		Watch: {
			Styles: 'src/less/**/*.{less,css}',
			Jade: 'src/jade/**/*.jade',
			Images: ['src/img/**/*.*', '!src/img/sprite/*.*', '!src/img/favicon/*.*'],
			PngSprite: 'src/img/sprite/**/*.png',
			SvgSprite: 'src/svg/sprite/**/*.svg',
			Txt: ['src/humans.txt', 'src/robots.txt', 'src/.htaccess'],
			JS: 'src/js/**/*.*',
			Fonts: 'src/fonts/**/*',
			Favicon: 'src/img/favicon/favicon.png'
		}
	},

	// Bower components list
	bower: {
		concatJS: [
			'bower_components/jquery/dist/jquery.js',
			'bower_components/bootstrap/js/modal.js',
			'bower_components/bootstrap/js/button.js'
		],
		vendorJS: [
			'bower_components/countUp.js/dist/countUp.js',
			'bower_components/owl.carousel/dist/owl.carousel.js'
		]
	},

	// GitHub Pages options ex. git@github.com:vUdav/gulp-starter.git
	ghpOptions: {
		remoteUrl: 'git@github.com:vUdav/asatrans-frontend.git'
	},

	// Browser versions for automatically prefix
	autoprefixerBrowsers: ['last 3 versions', '> 1%', 'Firefox ESR'],

	// BrowserSync local web server settings
	browserSync: {
		server: './dist',
		baseDir: './dist',
		tunnel: false,
		host: 'localhost',
		port: 9000,
		injectChanges: true,
		delay: 100,
		logPrefix: 'asatrans'
	},

	// ftp config
	ftp: {
		host: '',
		user: '',
		pass: '',
		remotePath: ''
	}

};