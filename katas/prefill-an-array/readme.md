####Description:

Create the function prefill that returns an array of n elements that all have the same value v.

You have to validate input:

v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer that is >=0, throw a TypeError

####Example:

```js
prefill(3,1) //=> returns [1,1,1]

prefill(2,"abc") //=> returns ['abc','abc']

prefill(0, 1) //=> returns []

prefill(3, prefill(2,'2d')) //=> returns [['2d','2d'],['2d','2d'],['2d','2d']]

prefill("xyz", 1) //=> throws TypeError with message "xyz is invalid"
```

See [tests in prefill-an-array_test.js](https://github.com/ivanStraltsou/code-wars/blob/master/katas/prefill-an-array/prefill-an-array_test.js)

#####[Original Kata](http://www.codewars.com/kata/prefill-an-array)

Good luck
