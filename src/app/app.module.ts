import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { RoutingModule } from './routing/routing.module';
import { ComidaService } from './services/comida.service';
import { PeliculasService } from './services/peliculas.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, CarritoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NavbarModule,
    RoutingModule,
    ModalComponent
  ],
  providers: [PeliculasService, ComidaService],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
