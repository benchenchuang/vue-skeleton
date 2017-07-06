// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
	extends: [
		'airbnb-base',
		'plugin:vue/recommended'
	],
	plugins: [
		'html',
		'import'
	],
	settings: {
		'import/resolver': {
			'webpack': {
				'config': 'build/webpack.base.conf.js'
			}
		}
	},
	rules: {
		// don't require .vue extension when importing
		'import/extensions': ['error', 'always', {
			'js': 'never',
			'vue': 'never',
			'ts': 'never'
		}],
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
		'no-tabs': 0,
		'indent': ['error', 'tab', {
			'SwitchCase': 1
		}],
		'max-len': ['error', 120],
		'no-param-reassign': 0,
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'never'
		}]
	}
};
