####Description:

Please implement function, that takes a string in input, representing a multilinear non-constant polynomial in integers coefficients (like "3x-zx+2xy-x"), and returns another string as output where the same expression has been simplified (see example).

####Example:

```js
simplify('cb+cba') //=> returns 'bc+abc'
simplify('-abc+3a+2ac') //=> returns '3a+2ac-abc'
simplify('a+ca-ab') //=> returns 'a-ab+ac'
simplify('-y+x') //=> returns 'x-y'
```

Good luck

#####[Original Kata](http://www.codewars.com/kata/simplifing-multilinear-polynomials)