import Model, { attr } from '@ember-data/model';

export default class VehicleModel extends Model {
  @attr('string') type;
  @attr('string') brand;
  @attr('string') model;
  @attr('string') year;
  @attr('string') mileage;
  @attr('string') color;
  @attr('string') image;
  @attr('string') price;
  @attr('string') description;
  @attr('string') name;
  @attr('string') email;
  @attr('string') phone;
}

// const Validations = buildValidations({
//   type: validator('presence', true),
//   brand: validator('presence', true),
//   model: validator('presence', true),
//   year: validator('number', {allowString: true, gt: 1900}),
//   mileage: validator('number', {allowString: true}),
//   color: validator('presence', true),
//   image: validator('presence', true),
//   price: validator('number', {allowString: true, gt: 0}),
//   description: validator('presence', true),
//   name: validator('presence', true),
//   email: validator('presence', true),
//   phone: validator('presence', true),

// })
