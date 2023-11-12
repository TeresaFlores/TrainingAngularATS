import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarModule } from './top-nav-bar/top-nav-bar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TopNavBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
