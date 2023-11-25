import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { Subscription } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent implements OnInit {
  private subscription: Subscription;
  private currencySubscription: Subscription;
  open: boolean = false;
  moneda: 'USD' | 'EUR' | 'MXN' = 'MXN';
  carrito: {nombre: string, cantidad: number, precio: number}[] = [{ 
    nombre: '', 
    cantidad: 0, 
    precio: 0 
  }];

  constructor(private carritoService: CarritoService, private toastService: ToastService) {
    this.subscription = this.carritoService.open$.subscribe((open) => {
      this.open = open;
    });
    this.subscription = this.carritoService.carrito$.subscribe((carro) => {
      this.carrito = carro;
    });
    this.currencySubscription = this.carritoService.moneda$.subscribe((moneda) => {
      this.moneda = moneda;
    });
  }

  cerrar() {
    this.carritoService.cerrarCarro();
  }

  limpiarCarro() {
    this.carritoService.cerrarCarro();
    this.carritoService.clearCarro();
  }

  getCantidadElementos(){
    let totalElementos = 0;
    this.carrito.map( elem => {
      totalElementos = totalElementos + elem.cantidad;
    });

    return totalElementos;
  }

  getPrecioTotal(){
    let totalPrecio = 0;
    this.carrito.map( elem => {
      totalPrecio = totalPrecio + elem.precio;
    });
    
    return totalPrecio;
  }

  pagarTotal(){
    this.toastService.setMensaje(`Su pago por la cantidad de ${this.moneda} ${this.getPrecioTotal()} ha sido exitoso!`);
    this.toastService.abrirToast();
    this.carritoService.cerrarCarro();
    this.carritoService.clearCarro();
  }

  cambiarMoneda(monedaValue: 'USD' | 'EUR' | 'MXN'){
    console.log(monedaValue);
    this.carritoService.cambiarMoneda(monedaValue);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.currencySubscription.unsubscribe();
  }
}
