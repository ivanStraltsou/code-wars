### RegExp.clone() & RegExp.prototype.clone()

Make a utility function to clone a regex object that will give exactly the same results as the original.
The functionality should be able to be used in two methods: `RegExp.clone(/regex/)` and `(/regex/).clone()`.

Don't forget about the last execution index

```js
  var regex = /^[abc]/gim;

  regex.clone().exec("ZZ\nZZCZ\nCZZ\na") // ["C"]
  regex.exec("ZZ\nZZCZ\nCZZ\na"); // ["C"]
  regex.clone().exec("ZZ\nZZCZ\nCZZ\na") // ["a"]
  regex.exec("ZZ\nZZCZ\nCZZ\na"); // ["a"]
```

> [Original kata](http://www.codewars.com/kata/5303b2d6af7e3b414300056d)
