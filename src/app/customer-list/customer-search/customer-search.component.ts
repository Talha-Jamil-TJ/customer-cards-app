import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomerService } from '@services/customer.service';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.scss'],
})
export class CustomerSearchComponent implements OnInit, OnDestroy {
  inputControl = new FormControl('');
  faMagnifyingGlass = faMagnifyingGlass;
  private _unSub$ = new Subject();

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.subscribeToFormChanges();
  }

  subscribeToFormChanges() {
    this.inputControl.valueChanges.pipe(takeUntil(this._unSub$)).subscribe((value) => {
      this.customerService.filterCustomersByName(value);
    });
  }

  ngOnDestroy(): void {
    this._unSub$.next(null);
    this._unSub$.complete();
  }
}
