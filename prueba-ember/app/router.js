import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //Lets create a few routes. We want the urls to be /posts, /posts/1, and /posts/new. 
  this.resource("posts", function() {
    this.route("new");
    this.route("edit", {
      path: ":post_id"
    }); //The ':post_id' is called a dynamic segment. 
    //This will look for the post model id and use that as a part of the route in the url.
  });
});

export default Router;