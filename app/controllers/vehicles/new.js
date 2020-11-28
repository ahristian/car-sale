import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    submitCar: function() {
      let newVehicle = this.store.createRecord('vehicle',{
        id: this.get('id'),
        brand: this.get('brand'),
        model: this.get('model'),
        year: this.get('year'),
        mileage: this.get('mileage'),
        color: this.get('color'),
        image: this.get('image'),
        price: this.get('price'),
        description: this.get('description'),
        name: this.get('name'),
        email: this.get('email'),
        phone: this.get('phone')
      });
      console.log(newVehicle);
      newVehicle.save();
    }}
});
