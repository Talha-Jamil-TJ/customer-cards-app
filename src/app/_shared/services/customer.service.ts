import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { customersMock } from '@mocks/customer.mock';
import { Customer } from '@models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private _customers$ = new BehaviorSubject(customersMock);
  customers$ = this._customers$.asObservable();

  addCustomer(customer: Customer) {
    const customers = this._customers$.value;

    this._customers$.next([...customers, customer]);
  }
}
