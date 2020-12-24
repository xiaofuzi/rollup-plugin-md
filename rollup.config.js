import buble from 'rollup-plugin-buble';

const pkg = require('./package.json');
const external = Object.keys( pkg.dependencies );

export default {
	input: 'src/index.js',
	plugins: [ buble({ sourceMap: true }) ],
	output: [
		{
			format: 'cjs',
			file: pkg['main'],
			exports: 'auto'
		},
		{
			format: 'es',
			file: pkg['module'],
			exports: 'auto'
		}
	],
	external,
};
