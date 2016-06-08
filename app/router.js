import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('websites', function() {
    this.route('website', {path: '/:id'});
    this.route('new');
  });
});

export default Router;
