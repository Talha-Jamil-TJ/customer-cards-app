import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListModule } from './customer-list/customer-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CustomerListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
