import buble from 'rollup-plugin-buble';

var pkg = require('./package.json')
var external = Object.keys( pkg.dependencies );

export default {
    entry: 'src/index.js',
    //format: 'umd',
    //moduleName: 'rollup-plugin-md',
    //dest: 'dist/build.js',
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
