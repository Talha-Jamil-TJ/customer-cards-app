import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCardListComponent } from './customer-card-list.component';

describe('CustomerListComponent', () => {
  let component: CustomerCardListComponent;
  let fixture: ComponentFixture<CustomerCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
