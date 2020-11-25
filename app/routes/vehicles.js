/*import Route from '@ember/routing/route';


export default class IndexRoute extends Route {

  async model() {
    let response = await fetch('/vehicles.json');
    let { vehicles } = await response.json();
    return vehicles;
  }
}*/

import Ember from 'ember';

/*
var cars = [
	{
		"id": 1,
		"make": "Honda",
		"model": "Accord",
		"year": "2007"
	},
	{
		"id": 2,
		"make": "Toyota",
		"model": "Camry",
		"year": "2013"
	},
	{
		"id": 3,
		"make": "Ford",
		"model": "Explorer",
		"year": "2002"
	}
];
*/

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('vehicles')
  }
});
