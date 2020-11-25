import Adapter from '@ember-data/adapter';
import fetch from 'fetch';

export default class UserAdapter extends Adapter {
  queryRecord(store, type, query) {
    return fetch('/vehicles');
  }
}
