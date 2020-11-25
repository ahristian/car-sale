
import Route from '@ember/routing/route';

export default class VehiclesIndexRoute extends Route {
  model() {
    return this.store.findAll("vehicle");
  }
}
