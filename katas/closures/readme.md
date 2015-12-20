####Description:

In object-oriented programming, it is sometimes useful to have private shared state among all instances of a class; in other languages, like ruby, this shared state would be tracked with a class variable. In javascript we achieve this through closures and immediately-invoked function expressions.
Please write a Cat constructor that takes arguments name and weight to instantiate a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.

####Example:

```js
var garfield = new Cat('garfield', 25);

Cat.averageWeight(); //=> returns 25

var felix = new Cat('felix', 15);

Cat.averageWeight(); //=> returns 20
```

See [tests in closure_test.js](https://github.com/ivanStraltsou/code-wars/blob/master/katas/closures/closure_test.js)
#####[Original Kata](http://www.codewars.com/kata/using-closures-to-share-class-state)

Good luck
