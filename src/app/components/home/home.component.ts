import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  peliculaActual = 0;
  peliculas: PeliculasService['peliculas'] = [];
  constructor(private service: PeliculasService) {
    this.peliculas = service.getPeliculas();
  }

  ngOnInit(): void {
  }

  next() {
    this.peliculaActual =
      this.peliculaActual >= this.peliculas.length - 1
        ? 0
        : ++this.peliculaActual;
  }
  prev() {
    this.peliculaActual =
      this.peliculaActual <= 0
        ? this.peliculas.length - 1
        : --this.peliculaActual;
  }

  newIndex(movie: number) {
    this.peliculaActual = movie;
  }
}
