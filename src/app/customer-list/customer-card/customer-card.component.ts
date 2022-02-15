import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Customer } from '@models/customer';
import { GET_RANDOM_CLASS } from '@helpers/helpers';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerCardComponent implements OnInit {
  @Input() customer: Customer | null = null;

  pillColor = '#000000';

  ngOnInit(): void {
    this.setPillColor();
  }

  setPillColor() {
    this.pillColor = '#' + GET_RANDOM_CLASS();
  }
}
