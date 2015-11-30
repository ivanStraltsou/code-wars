####Description:

Implement a function transformArray which takes array of 'names' and 'values' as argument and returns object {name: value}.
In case, when only one pair of 'name' and 'value' exist, input will be an object (please see example).

Tips: Let's assume, that names in array are unique.

####Example:

```js
input = [
    {name: 'Name1', value: 123},
    {name: 'Name2', value: 'abc'},
    {name: 'Name3', value: '123abc'},
    {name: 'Name4', value: 'abc123'}
];
transformArray(input) //=> returns {Name1: 123, Name2: 'abc', Name3: '123abc', Name4: 'abc123'}

transformArray({name: 'Name1', value: 123}) //=> returns {Name1: 123}

```

Good luck
