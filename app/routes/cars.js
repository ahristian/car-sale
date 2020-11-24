import Route from '@ember/routing/route';


export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/cars.json');
    let { cars } = await response.json();
      return cars ;
  }
}
