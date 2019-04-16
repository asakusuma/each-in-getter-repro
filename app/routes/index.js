import Route from '@ember/routing/route';

export default Route.extend({
  model() {
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
    return {
      pojo,
      dotNotation,
      getter
    };
  }
});

