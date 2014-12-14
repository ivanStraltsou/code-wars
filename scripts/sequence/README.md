[![Build Status](https://travis-ci.org/ivanStraltsou/code-wars.svg?branch=master)](https://travis-ci.org/ivanStraltsou/code-wars)
Function sequence invocation
================

[original kata](http://www.codewars.com/kata/53c8b29750fe70e4a2000610)

Implement `sequence` function to flatten the execution stack

Example:

```javascript
add(1, 3) // 4
multiply(2, 4) // 8
concat('Hello ', 'Code Wars!'') // Hello Code Wars!
log('result') // logs `result`

// sequence invocation example
log(concat(add(multiply(5, 8), 2), ' is the answer')) === sequence(add, multiply, concat, log)(5, 8)(2)(‘ is the answer’)()

```
