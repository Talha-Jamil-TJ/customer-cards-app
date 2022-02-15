import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSearchComponent } from './customer-search.component';

@NgModule({
  declarations: [CustomerSearchComponent],
  imports: [CommonModule],
  exports: [CustomerSearchComponent],
})
export class CustomerSearchModule {}
