import Route from '@ember/routing/route';


export default class IndexRoute extends Route {

  async model() {
    let response = await fetch('/vehicles.json');
    let { vehicles } = await response.json();
    return vehicles;
  }
}
/*

import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.findAll('vehicle');
	}
});
*/


