### Ex. 1. RegExp.clone(regex) & RegExp.prototype.clone()

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

### Ex. 2. RegExp crossword
#### "Royal Dinner"

|| (FI&#124;A)+ | (YE&#124;OT)K | (.)[IF]+ | [NODE]+ | (FY&#124;F&#124;RG)+ |
|-----:|---------|----------|----------|---------|------------|
|**(Y&#124;F)(.)\2[DAF]\1**|||||||
|**(U&#124;O&#124;I)*T[FRO]+**|||||||
|**[KANE]\*[GIN]***|||||||

##### Example:

|                      | [^SPEAK]+ | EP&#124;IP&#124;EF |
|---------------------:|:---------:|:------------------:|
|**HE&#124;LL&#124;O+**|      H    |         E          |
|**[PLEASE]+**         |      L    |         P          |
