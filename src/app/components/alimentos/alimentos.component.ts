import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ComidaService } from 'src/app/services/comida.service';
@Component({
  selector: 'app-alimentos',
  standalone: true,
  imports: [CommonModule],
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

  constructor(private comidaService: ComidaService) {
    this.combos = this.comidaService.getCombos();
    this.palomitas = this.comidaService.getPalomitas();
    this.refrescos = this.comidaService.getRefrescos();
    this.comida = this.comidaService.getComida();

  }

  ngOnInit(): void {}
}
