import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionTitularSeleccionarJuegoFavoritoYSubtituloComponent } from './seccion-titular-seleccionar-juego-favorito-y-subtitulo.component';

describe('SeccionTitularSeleccionarJuegoFavoritoYSubtituloComponent', () => {
  let component: SeccionTitularSeleccionarJuegoFavoritoYSubtituloComponent;
  let fixture: ComponentFixture<SeccionTitularSeleccionarJuegoFavoritoYSubtituloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SeccionTitularSeleccionarJuegoFavoritoYSubtituloComponent]
    });
    fixture = TestBed.createComponent(SeccionTitularSeleccionarJuegoFavoritoYSubtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
