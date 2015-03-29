[![Build Status](https://travis-ci.org/ivanStraltsou/code-wars.svg?branch=master)](https://travis-ci.org/ivanStraltsou/code-wars)
Object UNDO/REDO
================

The purpose of this kata is to implement the undoRedo function.

This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

`set(key, value)` Assigns the value to the key. If the key does not exist, creates it.

`get(key)` Returns the value associated to the key.

`del(key)` removes the key from the object.

`undo()` Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

`redo()` Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

After `set()` or `del()` are called, there is nothing to redo.

All actions must affect to the object passed to `undoRedo(object)` function. So you can not work with a copy of the object.

```js

  // possible wrapper example
  function undoRedo(object) {

    return {
      set: function(key, value) {},
      get: function(key) {},
      del: function(key) {},
      undo: function() {},
      redo: function() {}
    };
  }
```

#### [Original kata and test suites](http://www.codewars.com/kata/undo-slash-redo)
