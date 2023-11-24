import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ModalService } from 'src/app/services/modal.service';
import { ActivatedRoute } from '@angular/router';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-boletos',
  standalone: true,
  imports: [CommonModule,ModalComponent],
  templateUrl: './boletos.component.html',
  styleUrl: './boletos.component.css',
})
export class BoletosComponent implements OnInit {
  peliculas: PeliculasService['peliculas'] = [];
  peliculaActual = 0;
  pelicula: PeliculasService['peliculas'][number] = {
    imagen: '',
    nombre: '',
    horarios: ['error'],
    sinopsis: '',
    clasificacion: '',
    duracion: '',
  };

  constructor(
    private peliculaService: PeliculasService,
    private modalService: ModalService,
    private route: ActivatedRoute
  ) {
    this.peliculas = peliculaService.getPeliculas();
  }

  selectHorario(horario: string, peliID: number): void {
    this.peliculaActual = isNaN(Math.floor(+peliID)) ? 0 : Math.floor(+peliID);
    this.pelicula = this.peliculaService.getPelicula(this.peliculaActual);
    this.modalService.setHorario(horario);
    this.modalService.setPelicula(this.pelicula.nombre);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(({ peliID }) => {
      this.peliculaActual = isNaN(Math.floor(+peliID))
        ? 0
        : Math.floor(+peliID);
      this.pelicula = this.peliculaService.getPelicula(this.peliculaActual);
      this.modalService.setHorario(this.pelicula.horarios[0]);
      this.modalService.setPelicula(this.pelicula.nombre);
    });
  }
}
