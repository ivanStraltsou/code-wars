####Description:

Create a regular expression capable of evaluating binary strings (strings with only 1s and 0s) and determining whether the given string represents a number divisible by 3.

- An empty string might be evaluated to true (it's not going to be tested, so you don't need to worry about it - unless you want)
- The input should consist only of binary digits - no spaces, other digits, alphanumeric characters, etc.
- There might be leading 0s.

####Example:

```js
multipleof3Regex.test('000') //=> returns true

multipleof3Regex.test('001') //=> returns false

multipleof3Regex.test('011') //=> returns true

multipleof3Regex.test('110') //=> returns true

multipleof3Regex.test(' abc ') //=> returns false
```

See [tests in binary-multiple-of-3_test.js](https://github.com/ivanStraltsou/code-wars/blob/master/katas/binary-multiple-of-3/binary-multiple-of-3_test.js)

#####[Original Kata](http://www.codewars.com/kata/binary-multiple-of-3)

Good luck
