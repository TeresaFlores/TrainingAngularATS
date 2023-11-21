import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boletos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boletos.component.html',
  styleUrl: './boletos.component.css'
})
export class BoletosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}