## Fragmented range

Let's imagine we have a range-picker and for some reason we need different fragmentation for different intervals.

e.g. I would like to have an opportunity to configure the following range - step is different for different intervals (values can be of any type) :

```
[10, 20, 30, 40, 50, 51, 52, 53, ..., 70, 80, 90, 100]
```

The ouput will contain component constructor - FragmentedRangePicker(options: Object).

```js

var picker = new FragmentedRangePicker({

  // it's up to you to define the options structure, values generators and so on
});

// use input[type="range"] for picker implementation
// el property will return an element
document.body.appendChild(picker.el);

// we need only getter for tests now
picker.val();

```
