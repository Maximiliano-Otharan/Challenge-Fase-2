import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselJuegosComponent } from './carrusel-juegos.component';

describe('CarruselJuegosComponent', () => {
  let component: CarruselJuegosComponent;
  let fixture: ComponentFixture<CarruselJuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CarruselJuegosComponent]
    });
    fixture = TestBed.createComponent(CarruselJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
