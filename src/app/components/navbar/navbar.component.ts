import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from 'src/app/routing/routing.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RoutingModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  displayMobile = false;

  constructor() {}

  ngOnInit(): void {}

}
