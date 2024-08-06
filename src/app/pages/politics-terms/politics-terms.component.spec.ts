import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsTermsComponent } from './politics-terms.component';

describe('PoliticsTermsComponent', () => {
  let component: PoliticsTermsComponent;
  let fixture: ComponentFixture<PoliticsTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticsTermsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticsTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
