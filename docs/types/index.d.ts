/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Complex64 } from '@stdlib/types/complex';

/**
* Rounds each component of a single-precision complex floating-point number toward positive infinity.
*
* @param z - input value
* @returns result
*
* @example
* var Complex64 = require( '@stdlib/complex-float32-ctor' );
* var real = require( '@stdlib/complex-float32-real' );
* var imag = require( '@stdlib/complex-float32-imag' );
*
* var v = cceilf( new Complex64( -1.5, 2.5 ) );
* // returns <Complex64>
*
* var re = real( v );
* // returns -1.0
*
* var im = imag( v );
* // returns 3.0
*/
declare function cceilf( z: Complex64 ): Complex64;


// EXPORTS //

export = cceilf;
