import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
      return this.store.find('post');
    } // We are just telling posts that they have access to the post model.
    // This way our posts template will have access to our post model.
});