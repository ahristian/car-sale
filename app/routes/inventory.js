import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return {
      title: 'Tesla Model 3 for 35.000$',
      brand: 'Tesla',
      model: 'Model',
      mileage: '1k',
      color: 'White',
      price: '35.000$',
      image: 'https://inteng-storage.s3.amazonaws.com/img/iea/XD6K7Knj6v/sizes/teslamodel3_md.jpg',
      description: 'The Tesla Model 3 is an electric four-door fastback sedan developed by Tesla. The Model 3 Standard' +
        ' Range Plus version delivers an EPA-rated all-electric range of 263 miles (423 km) and the Long Range versions' +
        ' deliver 353 miles (568 km). According to Tesla the Model 3 carries full self-driving hardware, with periodic ' +
        'software updates adding functionality. Limited production of the Model 3 began in mid-2017, with the first ' +
        'production vehicle rolling off the assembly line on July 7, 2017.',
    };
  }
}
