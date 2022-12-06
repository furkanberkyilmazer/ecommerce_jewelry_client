import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketCountComponent } from './basket-count.component';

describe('BasketCountComponent', () => {
  let component: BasketCountComponent;
  let fixture: ComponentFixture<BasketCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
