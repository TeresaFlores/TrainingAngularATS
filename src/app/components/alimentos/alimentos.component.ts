import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComidaService } from 'src/app/services/comida.service';
@Component({
  selector: 'app-alimentos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alimentos.component.html',
  styleUrl: './alimentos.component.css',
})
export class AlimentosComponent implements OnInit {
  combos: {
    imagen: string;
    nombre: string;
    precio: string;
    descripcion: string;
  }[] = [];

  palomitas: {
    imagen: string;
    nombre: string;
    precio: string;
  }[] = [];

  refrescos: {
    imagen: string;
    nombre: string;
    precio: string;
  }[] = [];

  comida: {
    imagen: string;
    nombre: string;
    precio: string;
  }[] = [];

  cantidadCombo: number[] = [];
  cantidadPalomita: number[] = [];
  cantidadRefresco: number[] = [];
  cantidadComida: number[] = [];


  constructor(private comidaService: ComidaService) {
    this.combos = this.comidaService.getCombos();
    this.palomitas = this.comidaService.getPalomitas();
    this.refrescos = this.comidaService.getRefrescos();
    this.comida = this.comidaService.getComida();

  }

  ngOnInit(): void {
    this.setCantidadDefaultCombo();
    this.setCantidadDefaultPalomita();
    this.setCantidadDefaultRefresco();
    this.setCantidadDefaultComida();

  }

  setCantidadDefaultCombo() {
    this.combos.map(() => {
      this.cantidadCombo.push(1);
    })
  }

  setCantidadDefaultPalomita() {
    this.palomitas.map(() => {
      this.cantidadPalomita.push(1);
    })
  }

  setCantidadDefaultRefresco() {
    this.refrescos.map(() => {
      this.cantidadRefresco.push(1);
    })
  }

  setCantidadDefaultComida() {
    this.comida.map(() => {
      this.cantidadComida.push(1);
    })
  }
  addComboCarro(comboId: number) {
    const dulceria = this.combos[comboId];
    const cantidad = this.cantidadCombo[comboId];
    const nombre = dulceria.nombre;
    const precio = +dulceria.precio * cantidad;

    console.log('alimento - ', {nombre, cantidad, precio})
    // this.cartService.AddAlimento({ nombre, cantidad, precio });
  }
  addPalomitaCarro(palomitaId: number) {
    const dulceria = this.palomitas[palomitaId];
    const cantidad = this.cantidadPalomita[palomitaId];
    const nombre = dulceria.nombre;
    const precio = +dulceria.precio * cantidad;

    console.log('alimento - ', {nombre, cantidad, precio})

    // this.cartService.AddFood({ itemName, qty, price });
  }
  addRefrescoCarro(refrescoId: number) {
    const dulceria = this.refrescos[refrescoId];
    const cantidad = this.cantidadRefresco[refrescoId];
    const nombre = dulceria.nombre;
    const precio = +dulceria.precio * cantidad;

    console.log('alimento - ', {nombre, cantidad, precio})

    // this.cartService.AddFood({ itemName, qty, price });
  }
  addComidaCarro(comida: number) {
    const dulceria = this.comida[comida];
    const cantidad = this.cantidadComida[comida];
    const nombre = dulceria.nombre;
    const precio = +dulceria.precio * cantidad;

    console.log('alimento - ', {nombre, cantidad, precio})
    // this.cartService.AddFood({ itemName, qty, price });
  }
}
