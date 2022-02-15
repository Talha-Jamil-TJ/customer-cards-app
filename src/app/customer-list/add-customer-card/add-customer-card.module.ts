import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCustomerCardComponent } from './add-customer-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AddCustomerCardComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [AddCustomerCardComponent],
})
export class AddCustomerCardModule {}
