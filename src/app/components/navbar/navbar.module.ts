import { NgModule, OnInit } from '@angular/core';
import { RoutingModule } from 'src/app/routing/routing.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [NavbarComponent, RoutingModule],
  exports: [NavbarComponent],
})
export class NavbarModule implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
