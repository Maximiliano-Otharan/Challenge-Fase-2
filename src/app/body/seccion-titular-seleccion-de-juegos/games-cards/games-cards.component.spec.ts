import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCardsComponent } from './games-cards.component';

describe('GamesCardsComponent', () => {
  let component: GamesCardsComponent;
  let fixture: ComponentFixture<GamesCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GamesCardsComponent]
    });
    fixture = TestBed.createComponent(GamesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
