import DS from 'ember-data';

let attr = DS.attr;

export default DS.Model.extend ({
  type: attr('string'),
  brand: attr('string'),
  model: attr('string'),
  year: attr('string'),
  mileage: attr('string'),
  color: attr('string'),
  image: attr('string'),
  price: attr('string'),
  description: attr('string'),

});
