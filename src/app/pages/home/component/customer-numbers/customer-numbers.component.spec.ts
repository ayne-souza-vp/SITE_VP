import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNumbersComponent } from './customer-numbers.component';

describe('CustomerNumbersComponent', () => {
  let component: CustomerNumbersComponent;
  let fixture: ComponentFixture<CustomerNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerNumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
