import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from 'src/app/services/modal.service';
import { Subscription } from 'rxjs';
import { PeliculasService } from 'src/app/services/peliculas.service';

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
  cantidadBoletos: number = 0;

  private subscription: Subscription;

  constructor(private modalService: ModalService) {
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

  addBoletoCarro(pelicula: string, cantidad: number, horario: string) {
    console.log('boleto - ', {pelicula, cantidad, horario})
    this.clearMessage();
  }

}
