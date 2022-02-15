import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Customer } from '@models/customer';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerCardComponent implements OnInit {
  @Input() customer: Customer | null = null;

  ngOnInit(): void {}
}
