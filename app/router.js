import EmberRouter from '@ember/routing/router';
import config from 'car-sale/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact');

  this.route('recipes', function () {
    this.route('show', { path: '/:recipe_id' });
  });
  this.route('plans', function () {
    this.route('show', { path: '/:plan_id' });
  });
  this.route('vehicles', function () {
    this.route('show', { path: '/:vehicle_id' });
  });
});
