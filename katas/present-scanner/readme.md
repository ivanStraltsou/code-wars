####Description:

New year is coming. It’s magic time, when everybody will get presents. It is prohibited to open them till the morning of the 1st of January, however everybody wants to know what is inside. You behaved well all the year and you have a wish list.
You know the size of pack, its weight and you can hear if present clatters.
Try to guess what is inside the package.

####Rule:

Possible values for size: "small", "medium", "huge"
Possible values for clatters: "no", "a bit", "yes", "who knows"
Possible values for weight: "light", "3 kg", "medium", "heavy"
The return value must be an array of the names of items from your wishlist, e.g. ["Toy Car", "Card Game"]
Don't add any item more than once to the result
The order of names in the returned array doesn't matter
It's impossible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, choose the first one from wishlist.

####Example:

```js
var wishlist = [
    {name: 'ferrari keys', size: 'small', weight: 'light', clatters: 'yes'}, 
    {name: 'big house', size: 'huge', weight: 'heavy', clatters: 'who knows'},
    {name: 'peace of gold', size: 'medium', weight: '3 kg', clatters: 'no'}, 
    {name: 'gubozakatochnaya machine', size: 'small', weight: 'light', clatters: 'a bit'}
];
var presents = [
    {size: "small", weight: "light", clatters: "yes"},
    {size: "medium", weight: "medium", clatters: "no"}
];
```

#####[Original Kata](http://www.codewars.com/kata/present-scanner)

Good luck
