# each-in-getter-repro

`each-in` doesn't apppear to correctly render properties where:

1. The key has a dot (`.`) in it
2. A property descriptor was used

For instance, `getter` and `dotNotation` won't properly render:
```
const getter = Object.create(Object.prototype, {
  foo: {
    get: function () {
      return 'bar';
    }
  }
});
const dotNotation = {};
dotNotation['fo.o'] = 'bar';
const pojo = { foo: 'bar' };
```