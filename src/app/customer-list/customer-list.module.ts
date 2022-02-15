import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerCardListComponent } from './customer-card-list.component';
import { CustomerCardModule } from './customer-card/customer-card.module';
import { CustomerSearchModule } from './customer-search/customer-search.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomerCardListComponent },
];

@NgModule({
  declarations: [CustomerCardListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CustomerCardModule, CustomerSearchModule],
  exports: [CustomerCardListComponent],
})
export class CustomerListModule {}
