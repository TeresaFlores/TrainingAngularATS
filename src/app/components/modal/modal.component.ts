import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from 'src/app/services/modal.service';
import { Subscription } from 'rxjs';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnDestroy{
  pelicula: string = '';
  horario: string = '';
  cantidadBoletos: number = 1;
  private precioBoletos: number = 75;

  private subscription: Subscription;

  constructor(private modalService: ModalService, private carritoService: CarritoService) {
    this.subscription = this.modalService.pelicula$.subscribe((pelicula) => {
      this.pelicula = pelicula;
    });
    this.subscription = this.modalService.horario$.subscribe((horario) => {
      this.horario = horario;
    });
  }

  selectBoletos(boleto: string) {
    this.cantidadBoletos = +boleto;
  }

  clearMessage() {
    this.modalService.resetContent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addBoletoCarro(nombre: string, cantidad: number) {
    const precio = this.precioBoletos * cantidad;

    this.carritoService.agregarElemento({nombre,cantidad,precio});
    this.carritoService.abrirCarro();
    this.clearMessage();
  }

}
