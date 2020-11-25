import DS from 'ember-data'

export default DS.RESTAdapter.extend({
  host: "vehicles.json?jsonp=?",
  shouldReloadAll(){
    return true;
  }
});
