import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSecundarioFiltroComponent } from './boton-secundario-filtro.component';

describe('BotonSecundarioFiltroComponent', () => {
  let component: BotonSecundarioFiltroComponent;
  let fixture: ComponentFixture<BotonSecundarioFiltroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BotonSecundarioFiltroComponent]
    });
    fixture = TestBed.createComponent(BotonSecundarioFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
