import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarModule } from './top-nav-bar/top-nav-bar.module';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [BrowserModule, TopNavBarModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
