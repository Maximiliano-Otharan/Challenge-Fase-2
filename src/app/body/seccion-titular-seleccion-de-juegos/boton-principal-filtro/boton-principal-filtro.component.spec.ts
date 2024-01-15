import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPrincipalFiltroComponent } from './boton-principal-filtro.component';

describe('BotonPrincipalFiltroComponent', () => {
  let component: BotonPrincipalFiltroComponent;
  let fixture: ComponentFixture<BotonPrincipalFiltroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BotonPrincipalFiltroComponent]
    });
    fixture = TestBed.createComponent(BotonPrincipalFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
