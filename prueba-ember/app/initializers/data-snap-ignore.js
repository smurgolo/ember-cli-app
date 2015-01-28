export default {
  name: 'data-snap-ignore',
  initialize: function initialize(container, application) {
    // application.inject('route', 'foo', 'service:foo');
    Ember.View.reopen({
      attributeBindings: ['data-snap-ignore']
    });
  }
};