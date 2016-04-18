####Description:

Haskell lists are similar to JavaScript arrays. However there are some differences.

####Example:

```js
[2,3,-5,3] // just like in JavaScript : [2,3,-5,3]
[1..5] // goes forward with step 1 : [1,2,3,4,5]
[1,3..7] // goes forward with step 2 (3 - 1) : [1,3,5,7]
[6,5..3] // goes back with step -1 = (5 - 6) : [6,5,4,3]
[6,4..0] // goes back with step -2 = (4 -6) : [6, 4, 2, 0]
[5..3] // default step is 1 while the range is decreasing : []
[10,1..10] // goes back with step -9 for an increasing range : [10]
[1,1..10] // goes forwaed with step is 0 = ( 1 - 1) : infitite list [1,1,...]. Do not worry about this case in this kata for this, we will deal with it in the third part.
[1..9,12..15] // invalid since one single range is allowed
[1,2..20,25] // invalid since a range has to be the final item
[1,2,3..20] // invalid since at most one inidivual element can be provided before a range
```

A formal definition:
- a list of individual elements : the resulting list is the list made of the individual elements as in classical Javascript
- a range in the form start..end : if end >= start, the list is [start, start+1, start+2, ..., end] otherwise the result is []
- a single element a followed by a range : let step = start - a
- if start === end the list is [a,start]
- if step is positive and end > start then the list is [a, a+step, a+2*step, ...] as long as a+k*step <= end
- if step is negative and end < start then the list is [a, a+step, a+2*step, ...] as long as a-k*step >= end
- otherwise the list is []

Please implement similar functionality in javascript.

See [tests in haskellListDotNotation_test.js](https://github.com/ivanStraltsou/code-wars/blob/master/katas/haskell-list-dot-notation/haskellListDotNotation_test.js)
#####[Original Kata](http://www.codewars.com/kata/haskell-list-dot-notation)

Good luck
