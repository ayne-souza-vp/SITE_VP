import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPagesComponent } from './banner-pages.component';

describe('BannerPagesComponent', () => {
  let component: BannerPagesComponent;
  let fixture: ComponentFixture<BannerPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
