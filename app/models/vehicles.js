import Model, { attr } from '@ember-data/model';

export default class VehicleModel extends Model {
  @attr('string') brand;
  @attr('string') model;
  @attr('number') year;
  @attr('number') mileage;
  @attr('string') color;
  @attr('string') image;
  @attr('number') price;
  @attr('string') description;
}



