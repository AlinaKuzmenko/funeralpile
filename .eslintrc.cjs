module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		"project": './tsconfig.json',
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		"react/react-in-jsx-scope": 0,
		"react/require-default-props": 0,
		"react/jsx-props-no-spreading": 0,
		"jsx-a11y/anchor-has-content": 0,
		"jsx-a11y/control-has-associated-label": 0,
		"eqeqeq": 0,
		"import/no-cycle": 0,
		"import/prefer-default-export": 0,
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
