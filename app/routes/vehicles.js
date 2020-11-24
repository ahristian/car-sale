import Route from '@ember/routing/route';


/*let cars = [
  {
    "id": 4,
    "brand": "Toyota",
    "model": "Camry",
    "year": "2013",
    "mileage": "155,624 miles",
    "color": "white",
    "price": "$9,999",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZYlBx-U7tNv2o9WEWE_Idt32otRHGO16iw&usqp=CAU",
    "description": "In good conditions"
  },
  {
    "id": 1,
    "brand": "Tesla",
    "model": "Model",
    "year": "2020",
    "mileage": "1k miles",
    "color": "White",
    "price": "$35.000",
    "image": "https://inteng-storage.s3.amazonaws.com/img/iea/XD6K7Knj6v/sizes/teslamodel3_md.jpg",
    "description": "The Tesla Model 3 is an electric four-door fastback sedan developed by Tesla. The Model 3 Standard Range Plus version delivers an EPA-rated all-electric range of 263 miles (423 km) and the Long Range versions deliver 353 miles (568 km). According to Tesla the Model 3 carries full self-driving hardware, with periodic software updates adding functionality. Limited production of the Model 3 began in mid-2017, with the first production vehicle rolling off the assembly line on July 7, 2017."
  },
  {
    "id": 2,
    "brand": "Audi",
    "model": "Q5",
    "year": "2019",
    "mileage": "18,446 miles",
    "color": "Rock Gray",
    "price": "$38.000",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/41/2017_Audi_Q5_S_Line_TFSi_Quattro_2.0_Front.jpg",
    "description": "The 2018 Audi Q5 finishes in the top third of our luxury compact SUV rankings. It delivers engaging performance and has a posh interior, making it one of the most-well-rounded vehicles in the class."
  },
  {
    "id": 3,
    "brand": "Kia",
    "model": "Sorento",
    "year": "2019",
    "mileage": "21,624 miles",
    "color": "Red (Burgundy)",
    "price": "$19,999",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Kia_Sorento_%28UM%29_diesel_2199cc_registered_March_2017.jpg/1200px-Kia_Sorento_%28UM%29_diesel_2199cc_registered_March_2017.jpg",
    "description": "The 2020 Kia Sorento is a seven-seat SUV that is available in five trim levels: L, LX, S, EX Sport and SX. The L and the LX are reasonably well equipped, while the S and the EX add more convenience features. The SX trims top the range with more luxury-oriented features."
  }
];*/
export default class VehiclesRoute extends Route {
  async model () {
    return this.store.findAll('car');
    };
}
