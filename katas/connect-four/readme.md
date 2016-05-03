####Description:

Given a multidimensional array representing a Connect Four board, please create a function which can determine who win the game.

Connect Four is a game in which two players take turns dropping red or yellow colored discs into a vertically suspended 7 x 6 grid. Discs fall to the bottom of the grid, occupying the next available space.

A player wins by connecting four of their discs horizontally, vertically or diagonally.


####Example:

```js
var board = [['-','-','-','-','-','-','-'],
             ['-','-','-','-','-','-','-'],
             ['-','-','-','R','R','R','R'],
             ['-','-','-','Y','Y','R','Y'],
             ['-','-','-','Y','R','Y','Y'],
             ['-','-','Y','Y','R','R','R']];
connectFour(board); //returns 'R';
```

See [tests in connect-four_test.js](https://github.com/ivanStraltsou/code-wars/blob/master/katas/connect-four/connect-four_test.js)

Good luck
