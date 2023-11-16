import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarModule } from './top-nav-bar/top-nav-bar.module';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './toast/toast.component';
import { TicketsPageComponent } from './tickets-page/tickets-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    HomePageComponent,
    TicketsPageComponent,
    FoodPageComponent,
    ContactPageComponent,
    CartComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, TopNavBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
