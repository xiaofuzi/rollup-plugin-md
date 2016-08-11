var assert = require( 'assert' );
var rollup = require( 'rollup' );
var md = require( '..' );
var npm = require( 'rollup-plugin-node-resolve' );

require( 'source-map-support' ).install();

process.chdir( __dirname );

function executeBundle ( bundle ) {
    var generated = bundle.generate();
    var code = generated.code;

    var fn = new Function( 'assert', code );
    fn( assert );
}

describe( 'rollup-plugin-md', function () {
    it( 'converts md', function () {
        return rollup.rollup({
            entry: 'samples/main.js',
            plugins: [ md() ]
        }).then( executeBundle );
    });
});
