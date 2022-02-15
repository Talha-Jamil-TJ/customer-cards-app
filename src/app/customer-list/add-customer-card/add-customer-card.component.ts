import { Component, OnInit } from '@angular/core';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-customer-card',
  templateUrl: './add-customer-card.component.html',
  styleUrls: ['./add-customer-card.component.scss']
})
export class AddCustomerCardComponent implements OnInit {
  faAdd = faAdd;
  constructor() { }

  ngOnInit(): void {
  }

}
