import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerCardListModule } from './customer-list/customer-card-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CustomerCardListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
