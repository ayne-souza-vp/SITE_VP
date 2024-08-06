import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSoluctionsComponent } from './card-soluctions.component';

describe('CardSoluctionsComponent', () => {
  let component: CardSoluctionsComponent;
  let fixture: ComponentFixture<CardSoluctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSoluctionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSoluctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
