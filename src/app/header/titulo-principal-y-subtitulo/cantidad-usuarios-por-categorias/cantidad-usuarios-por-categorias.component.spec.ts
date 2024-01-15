import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadUsuariosPorCategoriasComponent } from './cantidad-usuarios-por-categorias.component';

describe('CantidadUsuariosPorCategoriasComponent', () => {
  let component: CantidadUsuariosPorCategoriasComponent;
  let fixture: ComponentFixture<CantidadUsuariosPorCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CantidadUsuariosPorCategoriasComponent]
    });
    fixture = TestBed.createComponent(CantidadUsuariosPorCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
