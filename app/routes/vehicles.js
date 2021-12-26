import { collection } from 'ember-cloud-firestore-adapter/firebase/firestore';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class VehicleRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('vehicle', {
      adapterOptions: {
        isRealtime: true
      }
    });
  }
}

