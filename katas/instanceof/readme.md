### instanceof operator internals

Everybody is familiar with `instanceof` operator. Does everyone know the way it works and what it tries to compare in runtime?

### Task

Implement `instanceOf` function to emulate `instanceof` operator behavior. It should be possible to mix it into any prototype.

Hint

>! Checkout <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" target="_blank">methods of the Object constructor</a>. It will help you to access the proto in legal way.

```js
var newInstance = new YourObj();

// mixed into prototype
// equals to `newInstance instanceof Object`
newInstance.instanceOf(Object);

// explicit context, it should help you to realize the way instance is accessed inside of the function
// equals to `newInstance instanceof Object`
instanceOf.call(newInstance, Object);
```