<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Trigamma

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Trigamma][trigamma-function] function.

<section class="intro">

The [trigamma function][trigamma-function] `ψ^(1)` is the derivative of the [digamma function][@stdlib/math/base/special/digamma].

<!-- <equation class="equation" label="eq:trigamma_function" align="center" raw="\psi^{(1)}(x) =\frac{d}{dx} \Psi(x) = \sum_{k=0}^\infty \frac{1}{(k+x)^2}" alt="Trigamma function"> -->

<div class="equation" align="center" data-raw-text="\psi^{(1)}(x) =\frac{d}{dx} \Psi(x) = \sum_{k=0}^\infty \frac{1}{(k+x)^2}" data-equation="eq:trigamma_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/trigamma/docs/img/equation_trigamma_function.svg" alt="Trigamma function">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-trigamma
```

</section>

<section class="usage">

## Usage

```javascript
var trigamma = require( '@stdlib/math-base-special-trigamma' );
```

#### trigamma( x )

Evaluates the [trigamma function][trigamma-function].

```javascript
var v = trigamma( -2.5 );
// returns ~9.539

v = trigamma( 1.0 );
// returns ~1.645

v = trigamma( 10.0 );
// returns ~0.105
```

If `x` is `0` or a negative `integer`, the function returns `NaN`.

```javascript
var v = trigamma( 0.0 );
// returns NaN

v = trigamma( -1.0 );
// returns NaN

v = trigamma( -2.0 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = trigamma( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var trigamma = require( '@stdlib/math-base-special-trigamma' );

var x;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    x = (randu()*100.0) - 50.0;
    v = trigamma( x );
    console.log( 'x: %d, ψ^(1)(x): %d', x, v );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/digamma`][@stdlib/math/base/special/digamma]</span><span class="delimiter">: </span><span class="description">digamma function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/gamma`][@stdlib/math/base/special/gamma]</span><span class="delimiter">: </span><span class="description">gamma function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-trigamma.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-trigamma

[test-image]: https://github.com/stdlib-js/math-base-special-trigamma/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-trigamma/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-trigamma/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-trigamma?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-trigamma.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-trigamma/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-trigamma/main/LICENSE

[trigamma-function]: https://en.wikipedia.org/wiki/Trigamma_function

<!-- <related-links> -->

[@stdlib/math/base/special/digamma]: https://github.com/stdlib-js/math-base-special-digamma

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/math-base-special-gamma

<!-- </related-links> -->

</section>

<!-- /.links -->
