import DS from 'ember-data';


export default DS.Model.extend ({
  type: DS.attr('string'),
  brand: DS.attr('string'),
  model: DS.attr('string'),
  year: DS.attr('string'),
  mileage: DS.attr('string'),
  color: DS.attr('string'),
  image: DS.attr('string'),
  price: DS.attr('string'),
  description: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),

});
