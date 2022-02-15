import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list.component';

@NgModule({
  declarations: [CustomerListComponent],
  imports: [CommonModule],
  exports: [CustomerListComponent],
})
export class CustomerListModule {}
