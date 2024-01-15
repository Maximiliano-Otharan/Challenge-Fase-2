import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionTitularSeleccionDeJuegosComponent } from './seccion-titular-seleccion-de-juegos.component';

describe('SeccionTitularSeleccionDeJuegosComponent', () => {
  let component: SeccionTitularSeleccionDeJuegosComponent;
  let fixture: ComponentFixture<SeccionTitularSeleccionDeJuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SeccionTitularSeleccionDeJuegosComponent]
    });
    fixture = TestBed.createComponent(SeccionTitularSeleccionDeJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
