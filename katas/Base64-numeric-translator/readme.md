####Description:

Our standard numbering system is (Base 10). That includes 0 through 9. Binary is (Base 2), only 1’s and 0’s. And Hexadecimal is (Base 16) (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F). A hexadecimal “F” has a (Base 10) value of 15. (Base 64) has 64 individual characters which translate in value in (Base 10) from between 0 to 63.

Write a method that will convert a string from (Base 64) to it's (Base 10) integer value.

Just as in standard (Base 10) when you get to the highest individual integer 9 the next number adds an additional place and starts at the beginning 10; so also (Base 64) when you get to the 63rd digit '/' and the next number adds an additional place and starts at the beginning "BA".


####Example:

```js
base64_to_base10("/") //=> returns 63
base64_to_base10("BA") //=> returns 64
base64_to_base10("BB") //=> returns 65
```

See [tests in base54-numeric-translator_test.js](https://github.com/ivanStraltsou/code-wars/blob/master/katas/Base64-numeric-translator/base54-numeric-translator_test.js)

#####[Original Kata](http://www.codewars.com/kata/base64-numeric-translator)

Good luck
