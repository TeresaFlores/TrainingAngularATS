import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private open = new BehaviorSubject<boolean>(false);
  private carrito = new BehaviorSubject<{nombre: string, cantidad: number, precio: number}[]>([]);
  private moneda = new Subject<'USD' | 'EUR' | 'MXN'>();
  carrito$ = this.carrito.asObservable();
  open$ = this.open.asObservable();
  moneda$ = this.moneda.asObservable();
  constructor() {}

  abrirCarro(){
    this.open.next(true)
  }

  cerrarCarro(){
    this.open.next(false)
  }


  agregarElemento(item: {nombre: string, cantidad: number, precio: number}) {
    const indexElemento = this.carrito.value.findIndex( el => el.nombre === item.nombre);

    if( indexElemento >= 0 ) {
      this.carrito.value[indexElemento].cantidad = this.carrito.value[indexElemento].cantidad + item.cantidad;
      this.carrito.value[indexElemento].precio = this.carrito.value[indexElemento].precio + item.precio;
    } else {
      this.carrito.next([...this.carrito.value, item]);
    }
  }

  eliminarElemento(item: {nombre: string, cantidad: number, precio: number}) {
    const indexElemento = this.carrito.value.findIndex( el => el.nombre === item.nombre);

    this.carrito.value.splice(indexElemento,1)
  }

  getCarro() {
    return this.carrito.value;
  }

  clearCarro() {
    this.carrito.next([]);
  }

  cambiarMoneda(monedaValue: 'USD' | 'EUR' | 'MXN') {
    this.moneda.next(monedaValue);
  }
}