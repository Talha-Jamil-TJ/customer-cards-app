import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerCardComponent } from './add-customer-card.component';

describe('AddCustomerCardComponent', () => {
  let component: AddCustomerCardComponent;
  let fixture: ComponentFixture<AddCustomerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
