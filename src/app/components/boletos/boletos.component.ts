import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-boletos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boletos.component.html',
  styleUrl: './boletos.component.css'
})
export class BoletosComponent implements OnInit {

  peliculas: PeliculasService['peliculas'] = [];
  constructor(private service: PeliculasService) {
    this.peliculas = service.getPeliculas();
  }

  ngOnInit(): void {
  }

}