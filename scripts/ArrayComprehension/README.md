[![Build Status](https://travis-ci.org/ivanStraltsou/code-wars.svg?branch=master)](https://travis-ci.org/ivanStraltsou/code-wars)
Implementing Array.prototype.groupBy method
================

[original kata](http://www.codewars.com/kata/53c8b29750fe70e4a2000610)

I would like to mimic some of the amazing things Haskell can do with lists.
Haskell lists are similar to JavaScript arrays.
For example, this is ok in both programming languages:

```javascript
[1,-3,4]

// But Haskell allows you to define lists like this:
[1..5] // equivalent to [1,2,3,4,5]

// Or this way:
[1,4..11] // equivalent to [1,4,7,10]

// This is also valid:
[5,4..2] // equivalent to [5,4,3,2]
```

* a list of individual elements : the resulting list is the list made of the individual elements as in classical Javascript
* a range in the form start..end : if end >= start, the list is [start, start+1, start+2, ..., end] otherwise the result is []
* a single element a followed by a range : let step = start - a
* if start === end the list is [a,start]
* if step is positive and end > start then the list is [a, a+step, a+2*step, ...] as long as a+k*step <= end
* if step is negative and end < start then the list is [a, a+step, a+2*step, ...] as long as a-k*step >= end
* otherwise the list is []

Tests:
1. [2,3,-5,3] // just like in JavaScript : [2,3,-5,3]
2. [1..5] // goes forward with step 1 : [1,2,3,4,5]
3.  [1,3..7] // goes forward with step 2 (3 - 1) : [1,3,5,7]
4. [6,5..3] // goes back with step -1 = (5 - 6) : [6,5,4,3]
5. [6,4..0] // goes back with step -2 = (4 -6) : [6, 4, 2, 0]
6. [5..3] // default step is 1 while the range is decreasing : []
7. [10,1..10] // goes back with step -9 for an increasing range : [10]
8. [1,1..10] // goes forwaed with step is 0 = ( 1 - 1) : infitite list [1,1,...]. Do not worry about this case in this kata for this, we will deal with it in the third part.
9. [1..9,12..15] // invalid since one single range is allowed
10. [1,2..20,25] // invalid since a range has to be the final item
11. [1,2,3..20] // invalid since at most one inidivual element can be provided before a range

```javascript
// See the tests for more examples
// Your work is to implement something like this in JavaScript.
// With this purpose, I have defined the ArrayComprehension function.

function ArrayComprehension(options) {

}
// The options parameter is an object with the generator key. The generator key is a string with list values:

ArrayComprehension({generator: '1,4,-3'}); // returns [1,4,-3]
ArrayComprehension({generator: '1..5'}); // returns [1,2,3,4,5]
ArrayComprehension({generator: '1,3..7'}); // returns [1,3,5,7]
ArrayComprehension({generator: '7,5..2'}); // returns [7,5,3]

// It is assumed that the generator format is always right. Therefore, no need to check it.
```
