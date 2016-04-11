####Description:

I remember "Programmer fiance notes" by Eksler as a very funny story. In this story was described love story of a programmer and pretty girl. Right before the wedding, programmer faced with a
challenge to automatically create invitation list. I would like to ask you to solve this problem.

Just imagine that you are those guy and make invitation list with seats. Don't place enemies together, try to put closer guys who know each other.
Let's assume that there would be on big table. You are free to extend property list.

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
        name: 'Jerry'
    },
    {
        name: 'ms. Stivens',
        friends: 'ms. Johnes',
        enemies: 'Jerry',
    },
    {
        name: 'ms. Johnes',
        friends: 'ms. Stivens',
    },
    {
        name: 'Nikolai',
        friends: 'Olga, Tanya, Konstantin',
    },
    {
        name: 'Olga',
        friends: 'Nikolai, Tanya, Konstantin',
    },
    {
        name: 'Tanya',
        friends: 'Konstantin, Nikolai, Olga',
    },
    {
        name: 'Konstantin',
        friends: 'Tanya, Nikolai, Olga',
    },
    {
        name: 'Billy',
        friends: 'Jerry',
        notes: 'Billy drinks too much, never place Jerry close to him'
    }
]) //=> returns ['Nikolai place 1', 'Olga place 2', 'Tanya places 3', 'Konstantin place 4', 'Jerry place 5', 'Billy place 6', 'ms. Johnes place 7', 'ms. Stivens place 8']
```

#####[Original Story](http://www.exler.ru/novels/wife.htm)

Good luck
