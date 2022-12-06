import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAddressComponent } from './orders-address.component';

describe('OrdersAddressComponent', () => {
  let component: OrdersAddressComponent;
  let fixture: ComponentFixture<OrdersAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
