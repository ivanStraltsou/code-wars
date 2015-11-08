####Description:

It is impossible to imagine modern world without cars and of course without traffic jams. 
Navigator can help us to find optimal way. Try to do navigator's job and find optimal route.

####Rule:

You are given with a set of objects each representing possible way from point A to point B.
Your function should return index of optimal route. We believe that time and distance are
equally important.

####Example:

```js
var idealPath = {
    name: 'idealPath',
    time: [25],
    distance: [18]
}

var path1 = {
    name: 'path1',
    time: [26, 8],
    distance: [15, 4]
}

var path2 = {
    name: 'path2',
    time: [20, 15],
    distance: [12, 10]
}

chooseBestPath(idealPath, path1, path2) //=> returns 'idealPath'
chooseBestPath(path1, path2) //=> returns 'path2'
```

See [tests in best-path_test.js](https://github.com/ivanStraltsou/code-wars/blob/master/katas/best-path/best-path_test.js)

Good luck