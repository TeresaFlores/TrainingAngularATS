import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComidaService } from 'src/app/services/comida.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-alimentos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alimentos.component.html',
  styleUrl: './alimentos.component.css',
})
export class AlimentosComponent implements OnInit {
  private currencySubscription: Subscription;
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
  moneda: 'USD' | 'EUR' | 'MXN' = 'MXN';
  constructor(
    private comidaService: ComidaService,
    private carritoService: CarritoService
  ) {
    this.combos = this.comidaService.getCombos();
    this.palomitas = this.comidaService.getPalomitas();
    this.refrescos = this.comidaService.getRefrescos();
    this.comida = this.comidaService.getComida();
    this.currencySubscription = this.carritoService.moneda$.subscribe(
      (moneda) => {
        this.moneda = moneda;
      }
    );
  }

  ngOnInit(): void {
    this.setCantidadDefaultCombo();
    this.setCantidadDefaultPalomita();
    this.setCantidadDefaultRefresco();
    this.setCantidadDefaultComida();
  }

  setCantidadDefaultCombo() {
    this.combos.forEach(() => {
      this.cantidadCombo.push(1);
    });
  }

  setCantidadDefaultPalomita() {
    this.palomitas.forEach(() => {
      this.cantidadPalomita.push(1);
    });
  }

  setCantidadDefaultRefresco() {
    this.refrescos.forEach(() => {
      this.cantidadRefresco.push(1);
    });
  }

  setCantidadDefaultComida() {
    this.comida.forEach(() => {
      this.cantidadComida.push(1);
    });
  }
  addComboCarro(comboId: number) {
    const dulceria = this.combos[comboId];
    const cantidad = this.cantidadCombo[comboId];
    const nombre = dulceria.nombre;
    const precio = +dulceria.precio * cantidad;

    this.carritoService.agregarElemento({ nombre, cantidad, precio });
    this.carritoService.abrirCarro();
  }
  addPalomitaCarro(palomitaId: number) {
    const dulceria = this.palomitas[palomitaId];
    const cantidad = this.cantidadPalomita[palomitaId];
    const nombre = dulceria.nombre;
    const precio = +dulceria.precio * cantidad;

    this.carritoService.agregarElemento({ nombre, cantidad, precio });
    this.carritoService.abrirCarro();
  }
  addRefrescoCarro(refrescoId: number) {
    const dulceria = this.refrescos[refrescoId];
    const cantidad = this.cantidadRefresco[refrescoId];
    const nombre = dulceria.nombre;
    const precio = +dulceria.precio * cantidad;

    this.carritoService.agregarElemento({ nombre, cantidad, precio });
    this.carritoService.abrirCarro();
  }
  addComidaCarro(comida: number) {
    const dulceria = this.comida[comida];
    const cantidad = this.cantidadComida[comida];
    const nombre = dulceria.nombre;
    const precio = +dulceria.precio * cantidad;

    this.carritoService.agregarElemento({ nombre, cantidad, precio });
    this.carritoService.abrirCarro();
  }

  ngOnDestroy(): void {
    this.currencySubscription.unsubscribe();
  }
}
