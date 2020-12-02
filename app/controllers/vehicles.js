import Ember from 'ember';


export default Ember.Controller.extend({
  actions: {
    deleteCarItem(vehicle){
      vehicle.destroyRecord();
    },
    updateCarItem(vehicle){
      let newInfoCar = this.store.peekRecord('vehicle', vehicle.id);
      newInfoCar.set('description', 'text');
      newInfoCar.set('brand', 'Lexus',);

      newInfoCar.save();
    }
  }

});
