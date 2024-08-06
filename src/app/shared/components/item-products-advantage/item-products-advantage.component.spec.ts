import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProductsAdvantageComponent } from './item-products-advantage.component';

describe('ItemProductsAdvantageComponent', () => {
  let component: ItemProductsAdvantageComponent;
  let fixture: ComponentFixture<ItemProductsAdvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemProductsAdvantageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemProductsAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
