# Lightweight Array.prototype.findIndex polyfill
[![Build Status](https://travis-ci.org/vovkabelov/array.findIndex.svg?branch=master)](https://travis-ci.org/vovkabelov/array.findIndex)
[![Coverage Status](https://coveralls.io/repos/github/vovkabelov/array.findIndex/badge.svg?branch=master&service=Github)](https://coveralls.io/github/vovkabelov/array.findIndex?branch=master&service=Github)
[![Maintainability](https://api.codeclimate.com/v1/badges/5850f186343160e5f42c/maintainability)](https://codeclimate.com/github/vovkabelov/array.findIndex/maintainability)
[![Size](https://badges.herokuapp.com/size/github/vovkabelov/array.findIndex/master/src/array-find-index-polyfill.js?gzip=true)](https://raw.githubusercontent.com/vovkabelov/array.findIndex/master/dist/array-find-index-polyfill.min.js)

The findIndex() method returns the index of the first element in the array 
that satisfies the provided testing function. Otherwise -1 is returned.

## How It Works
**1.** Download [Latest version](https://github.com/vovkabelov/array.findIndex/archive/master.zip) or install with bower 
`bower install array.findindex`  
**2.** Include polyfill on your web-page 
```html
<script src="dist/array-find-index-polyfill.min.js"></script>
```
**3.** Use as native method
```javascript
["apple", "banana", "peach"].findIndex(function(item) {
    return item === "banana";
});
// 1
```

## Performance
Testing in Chrome 61.0.3163 / Mac OS X 10.13.0  
**Native** 431,077 Ops/sec   
**Polyfill** 2,289,661 Ops/sec  

See [https://jsperf.com/array-prototype-find-index-polyfill](https://jsperf.com/array-prototype-find-index-polyfill)

## Links
[Specification](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.findindex) on "Ecma International"  
[MDN examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

## Copyright and license
Code and documentation copyright 2017 Vladimir Belov. Code released under the [MIT license](https://github.com/vovkabelov/array.find/blob/master/LICENSE).