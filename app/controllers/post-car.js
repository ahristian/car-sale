import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    submitCar: function() {
      let newCar = this.store.createRecord('car',{
        date: this.get('date'),
        brand: this.get('brand'),
        model: this.get('model'),
        year: this.get('year'),
        mileage: this.get('mileage'),
        color: this.get('color'),
        image: this.get('image'),
        price: this.get('price'),
        name: this.get('name'),
        email: this.get('email'),
        phone: this.get('phone'),

      });
      newCar.save();
      self.transitionTo('cars');
    }}
});
