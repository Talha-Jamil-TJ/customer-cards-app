import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerCardListComponent } from './customer-card-list.component';
import { CustomerCardModule } from './customer-card/customer-card.module';
import { CustomerSearchModule } from './customer-search/customer-search.module';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerCardModule } from './add-customer-card/add-customer-card.module';

const routes: Routes = [{ path: '', component: CustomerCardListComponent }];

@NgModule({
  declarations: [CustomerCardListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomerCardModule,
    CustomerSearchModule,
    AddCustomerCardModule,
  ],
  exports: [CustomerCardListComponent],
})
export class CustomerCardListModule {}
