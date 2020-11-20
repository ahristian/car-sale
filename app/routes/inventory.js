import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = [
  'cars'
];

export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/cars-in-stock.json');
    let { data } = await response.json();

    return data.map(model => {
      let { attributes } = model;
      let type;

      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'cars';
      }

      return { type, ...attributes };
    });
  }
}
