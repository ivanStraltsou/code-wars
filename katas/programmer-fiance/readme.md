####Description:

I remember "Programmer fiance notes" by Eksler as a very funny story. In this story was described love story of a programmer and pretty girl. Right before the wedding, programmer faced with a
challenge to automatically create invitation list. I would like to ask you to solve this problem.

Just imagine that you are those guy and make invitation list with seats. Don't place enemies together, try to put closer guys who know each other.
Let's assume that there would be on big table. Opposite seats (like 1 and 17) for friendly or neutral relationships.

####Example:

```js
// table and sitting places example
//     10 9 8
//     ------
// 11 |      | 7
// 12 |      | 6
// 13 |      | 5
// 14 |      | 4
// 15 |      | 3
// 16 |      | 2
// 17 |      | 1
//     ------
//    18 19 20

createInvitationList([
    {
        name: 'Jerry',
        manualPlacing: 8    //if person drinks too much it would be better to place him to the corner
    },
    {
        name: 'ms. Stivens',
        friends: 'ms. Johnes',
        enemies: 'Jerry'
    },
    {
        name: 'ms. Johnes',
        friends: 'ms. Stivens',
    },
    {
        name: 'Nikolai and Olga',
        friends: 'Tanya and Konstantin',
        places: 2
    },
    {
        name: 'Tanya and Konstantin',
        friends: 'Nikolai and Olga',
        places: 3   //they have a baby
    },
    {
        name: 'Billy',
        friends: 'Jerry'
    }
]) //=> returns ['ms. Stivens place 1', 'ms. Johnes place 2', 'Nikolai and Olga places 3,4', 'Tanya and Konstantin places 5,6,7', 'Jerry place 8', 'Billy place 9']
```

#####[Original Story](http://www.exler.ru/novels/wife.htm)

Good luck
