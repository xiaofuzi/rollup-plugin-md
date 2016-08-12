import buble from 'rollup-plugin-buble';

var pkg = require('./package.json')
var external = Object.keys( pkg.dependencies );

export default {
    entry: 'src/index.js',
    plugins: [ buble({ sourceMap: true }) ],
    targets: [
        {
            format: 'cjs',
            dest: pkg['main']
        },
        {
            format: 'es',
            dest: pkg['jsnext:main']
        }
    ],
    external: external,
    sourceMap: true
};
