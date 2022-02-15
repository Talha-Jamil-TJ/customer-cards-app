import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSearchComponent } from './customer-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CustomerSearchComponent],
    imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [CustomerSearchComponent],
})
export class CustomerSearchModule {}
