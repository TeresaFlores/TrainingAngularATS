import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { BoletosComponent } from '../components/boletos/boletos.component';
import { AlimentosComponent } from '../components/alimentos/alimentos.component';
import { ContactoComponent } from '../components/contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'boletos',
    component: BoletosComponent,
  },
  {
    path: 'dulceria',
    component: AlimentosComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
