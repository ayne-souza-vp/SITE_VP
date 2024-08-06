import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAdvantageComponent } from './products-advantage.component';

describe('ProductsAdvantageComponent', () => {
  let component: ProductsAdvantageComponent;
  let fixture: ComponentFixture<ProductsAdvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsAdvantageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
