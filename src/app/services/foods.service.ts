import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  private foods = [
    {
      pic: 'assets/foods/food (1).jpg',
      name: 'Rainbow Coke',
      description: 'Ice cold diabetees on a glass',
      price: 19.99,
    },
    {
      pic: 'assets/foods/food (2).jpg',
      name: 'Pneapple Pizza',
      description: 'A pizza with a whole pineapple for those pineapple lovers',
      price: 59.99,
    },
    {
      pic: 'assets/foods/food (3).jpg',
      name: 'Chocolate Hotdog',
      description: 'Steamy hotdog with german sausage covered in chocolate',
      price: 44.99,
    },
    {
      pic: 'assets/foods/food (4).jpg',
      name: 'Bannana Bacon',
      description: 'A bannana with bacon... there you go',
      price: 17.59,
    },
    {
      pic: 'assets/foods/food (5).jpg',
      name: 'Princess Burger',
      description: 'A hamburguer with raw eggs inside, sprinkled and glaced',
      price: 35.99,
    },
    {
      pic: 'assets/foods/food (6).jpg',
      name: 'Water',
      description: 'Ice cold water in a glass',
      price: 9.99,
    },
    {
      pic: 'assets/foods/food (7).jpg',
      name: 'Weird Sandwitch',
      description: 'A sandwitch with cheese, tomatoes, ham and lettuce',
      price: 25.99,
    },
  ];
  constructor() {}

  getFoods() {
    return this.foods;
  }
}
