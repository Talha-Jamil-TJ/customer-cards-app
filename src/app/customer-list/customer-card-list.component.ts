import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '@models/customer';
import { CustomerService } from '@services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-card-list.component.html',
  styleUrls: ['./customer-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerCardListComponent implements OnInit {
  customers$: Observable<Customer[]> = this.customerService.customers$;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {}
}
