import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PeliculasService } from './peliculas.service';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private pelicula = new Subject<string>();
  private horario = new Subject<string>();

  pelicula$ = this.pelicula.asObservable();
  horario$ =  this.horario.asObservable();

  setPelicula(pelicula: string) {
    this.pelicula.next(pelicula);
  }

  setHorario(horario: string){
    this.horario.next(horario);
  }

  resetContent() {
    this.pelicula.next('');
    this.horario.next('');
  }
}
