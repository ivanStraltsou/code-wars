####Description:

I remember "Programmer fiance notes" by Eksler as a very funny story. In this story was described love story of a programmer and pretty girl. Right before the wedding, programmer faced with a
challenge to automatically create invitation list. I would like to ask you to solve this problem.

Just imagine that you are those guy and make invitation list with seats. Don't place enemies together, try to put closer guys who know each other and reserve places at the beginning or in the end for guests with children.
You are free to extend property list.

####Example:

```js
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
        places: 1
    },
    {
        name: 'Nikolai and Olga',
        friends: 'Tanya and Konstantin',
        children: true,
        places: 3
    },
    {
        name: 'Tanya and Konstantin',
        friends: 'Nikolai and Olga',
        children: 2,
        places: 3
    },
    {
        name: 'Billy',
        friends: 'Jerry',
        places: 2,
        notes: 'Billy drinks too much, it would be better to reserve some extra place right behind Billy to let him sleep when he needs it'
    }
]) //=> returns ['Nikolai and Olga places 1,2,3', 'Tanya and Konstantin places 4,5,6', 'Jerry place 7', 'Billy place 8', 'ms. Johnes place 9', 'ms. Stivens place 10']
```

#####[Original Story](http://www.exler.ru/novels/wife.htm)

Good luck
