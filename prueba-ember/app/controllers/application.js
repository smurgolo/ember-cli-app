import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['posts/edit'],
  //This is just a way we can inject the 'posts/edit' controller into application controller. We'll need this so we can set the isEditing flag to false after we logout.
  actions: {
    login: function() {
      var route = this;
      (this.get('auth').authClient.login('twitter')).then(function() {
        this.get('auth').set('authed', true);
        return route.transitionTo('posts');
      });
    },
    logout: function() {
      this.get('auth').logout();
      this.set('controllers.posts/edit.isEditing', false);
      this.transitionToRoute('posts');
    }
  }
});
//The application.js controller will be used to capture the login and logout actions from the application.hbs template.