####Description:

You have a map, telling you where to find an answer. Follow it and return what you'll find in the end.
Be aware of wrong ways!

####Rule:

Your function should return null, if the way don't exist.


####Example:

```js
var testObject = {
        response: {
            data: [
                {
                    element: 'element1',
                    name: 'testabc'
                },
                {
                    element: 'element2',
                    name: 'testaudf'
                }
            ],
            config : {}
        },
        response2: [
            {
                element: 'element1',
                name: 'testudf'
            },
            {
                element: 'element2',
                name: 'uddf'
            }
        ]
    };
var map = ['response','data', 0, 'element'];

findTreasure(testObject, map) //=> returns 'element1'
```

See [tests in object-map_test.js](https://github.com/ivanStraltsou/code-wars/blob/master/katas/object-map/object-map_test.js)

Good luck
