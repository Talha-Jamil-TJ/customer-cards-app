import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { customersMock } from '@mocks/customer.mock';
import { Customer } from '@models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private unfilteredCustomers = customersMock;
  private _customers$ = new BehaviorSubject(this.unfilteredCustomers);
  customers$ = this._customers$.asObservable();

  addCustomer(customer: Customer) {
    const customers = this._customers$.value;

    this.updateCustomers([...customers, customer]);
  }

  filterCustomersByName(input: string) {
    const customers = this.unfilteredCustomers;

    const filteredCustomers = customers.filter((customer) =>
      customer.name.toLowerCase().startsWith(input.slice(0, Math.max(customer.name.length - 1, 1))),
    );

    this.updateCustomers(filteredCustomers);
  }

  updateCustomers(customers: Customer[]) {
    this._customers$.next(customers);
  }
}
