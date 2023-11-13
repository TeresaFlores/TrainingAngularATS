import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
//had to create this useless module otherwise ngModel would not work
@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule],
  exports: [ContactPageComponent],
})
export class ContactPageModule {}
