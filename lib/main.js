/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var Complex64 = require( '@stdlib/complex-float32-ctor' );
var ceilf = require( '@stdlib/math-base-special-ceilf' );
var realf = require( '@stdlib/complex-float32-real' );
var imagf = require( '@stdlib/complex-float32-imag' );


// MAIN //

/**
* Rounds each component of a single-precision complex floating-point number toward positive infinity.
*
* @param {Complex64} z - complex number
* @returns {Complex64} result
*
* @example
* var Complex64 = require( '@stdlib/complex-float32-ctor' );
* var realf = require( '@stdlib/complex-float32-real' );
* var imagf = require( '@stdlib/complex-float32-imag' );
*
* var v = cceilf( new Complex64( -1.5, 2.5 ) );
* // returns <Complex64>
*
* var re = realf( v );
* // returns -1.0
*
* var im = imagf( v );
* // returns 3.0
*/
function cceilf( z ) {
	return new Complex64( ceilf( realf( z ) ), ceilf( imagf( z ) ) );
}


// EXPORTS //

module.exports = cceilf;
