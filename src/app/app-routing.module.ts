import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TicketsPageComponent } from './tickets-page/tickets-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  { path: 'tickets', component: TicketsPageComponent },
  { path: 'food', component: FoodPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
