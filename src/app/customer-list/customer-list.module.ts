import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerCardListComponent } from './customer-card-list.component';
import { CustomerCardModule } from './customer-card/customer-card.module';
import { CustomerSearchModule } from './customer-search/customer-search.module';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerCardComponent } from './add-customer-card/add-customer-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomerCardListComponent },
];

@NgModule({
  declarations: [CustomerCardListComponent, AddCustomerCardComponent],
    imports: [CommonModule, RouterModule.forChild(routes), CustomerCardModule, CustomerSearchModule, FontAwesomeModule],
  exports: [CustomerCardListComponent],
})
export class CustomerListModule {}
