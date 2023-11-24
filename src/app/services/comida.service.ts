import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComidaService {
  constructor() {}

  private combos = [
    {
      imagen: 'assets/food/nachos.png',
      nombre: 'Combo Nachos',
      precio: '155.00',
      descripcion: 'Palomitas Grandes , Refresco Grande, Nachos',
    },
    {
      imagen: 'assets/food/hotdog.png',
      nombre: 'Combo HotDog',
      precio: '150.00',
      descripcion: 'Palomitas Grande, Refresco Grande , Nachos',
    },
    {
      imagen: 'assets/food/palomitas.png',
      nombre: 'Combo Pareja',
      precio: '145.00',
      descripcion: 'Palomitas Grandes, 2 Refrescos Grandes, Nachos',
    },
  ];

  private palomitas = [
    {
      imagen: 'assets/food/palomitas.png',
      nombre: 'Palomitas Chicas',
      precio: '50.00',
    },
    {
      imagen: 'assets/food/palomitas.png',
      nombre: 'Palomitas Medianas',
      precio: '60.00',
    },
    {
      imagen: 'assets/food/palomitas.png',
      nombre: 'Palomitas Grandes',
      precio: '70.00',
    },
  ];
  private refrescos = [
    {
      imagen: 'assets/food/refresco.png',
      nombre: 'Refresco Chico',
      precio: '40.00',
    },
    {
      imagen: 'assets/food/refresco.png',
      nombre: 'Refresco Mediano',
      precio: '50.00',
    },
    {
      imagen: 'assets/food/refresco.png',
      nombre: 'Refresco Grande',
      precio: '60.00',
    },
  ];
  private comida = [
    {
      imagen: 'assets/food/hotdog.png',
      nombre: 'Hot Dog',
      precio: '50.00',
    },
    {
      imagen: 'assets/food/nachos.png',
      nombre: 'Nachos',
      precio: '55.00',
    },
  ];

  getCombos(): typeof this.combos {
    return this.combos;
  }
  getRefrescos(): typeof this.refrescos {
    return this.refrescos;
  }
  getPalomitas(): typeof this.palomitas {
    return this.palomitas;
  }
  getComida(): typeof this.comida {
    return this.comida;
  }
}
