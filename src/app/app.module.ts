import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NavbarModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
