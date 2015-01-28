import Ember from 'ember';
//FILENAME DASHERISED Note that it has a dash in its name. This is neccessary for all ember-cli helpers.

//Sometimes you might want to reuse certain HTML in your templates or you might want to format it. Helpers can do this.
var formatDate = Ember.Handlebars.makeBoundHelper(function(date) {
  return moment(date).fromNow();
});


export default formatDate;