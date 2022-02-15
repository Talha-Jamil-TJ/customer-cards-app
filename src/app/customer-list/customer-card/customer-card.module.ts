import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerCardComponent } from './customer-card.component';

@NgModule({
  declarations: [CustomerCardComponent],
  imports: [CommonModule],
  exports: [CustomerCardComponent],
})
export class CustomerCardModule {}
