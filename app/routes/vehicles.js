import Route from '@ember/routing/route';

export default class VehicleRoute extends Route {
  model() {
    return this.store.findAll('vehicle', {
      adapterOptions: {
        isRealtime: true
      }
    });
  }
}
