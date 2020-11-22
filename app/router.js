import EmberRouter from '@ember/routing/router';
import config from 'car-sale/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about', {path: '/about'});
  this.route('contact', {path: '/contact-us'});
  this.route('inventory', {path: '/inventory'}, function () {
    this.route('new-car');
    this.route('car', {path: ':car_id'});
  });

})
;
