####Description:

Please complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page.

####Example:

```js
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);

helper.pageCount(); //=> returns 2
helper.itemCount(); //=> returns 6
helper.pageItemCount(0); //=> returns 4
helper.pageIndex(5); //=> returns 1 (zero based index)
```

See [tests in pagination-helper_test.js](https://github.com/ivanStraltsou/code-wars/blob/master/katas/PaginationHelper/pagination-helper_test.js)
#####[Original Kata](http://www.codewars.com/kata/paginationhelper)

Good luck
