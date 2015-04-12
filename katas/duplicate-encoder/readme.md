[![Build Status](https://travis-ci.org/ivanStraltsou/code-wars.svg?branch=master)](https://travis-ci.org/ivanStraltsou/code-wars)
Duplicate Encoder
================

The goal of this exercise is to convert a string to a new string where each character in the new string is `'('` if that character appears only once in the original string, or `')'` if that character appears more than once in the original string.

Ignore capitalization when determining if a character is a duplicate.

Examples:

```js
function encodeDuplicate(str) {
  //...
}

encodeDuplicate('din'); // "((("

encodeDuplicate('recede'); // "()()()"

encodeDuplicate('Success'); // ")())())"

encodeDuplicate('(( @'); // "))(("
```

####[Original kata](http://www.codewars.com/kata/54b42f9314d9229fd6000d9c)

Good luck!
