import Ember from 'ember';


export default Ember.Controller.extend({
  actions: {
    updateCarItem(vehicle){
      let newInfoCar = this.store.peekRecord('vehicle', vehicle.id);
      newInfoCar.set({
        'description': 'text',
        'brand': 'Lexus',
      });

      newInfoCar.save();
    }
  }

});
