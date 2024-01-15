import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloPrincipalYSubtituloComponent } from './titulo-principal-y-subtitulo.component';

describe('TituloPrincipalYSubtituloComponent', () => {
  let component: TituloPrincipalYSubtituloComponent;
  let fixture: ComponentFixture<TituloPrincipalYSubtituloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TituloPrincipalYSubtituloComponent]
    });
    fixture = TestBed.createComponent(TituloPrincipalYSubtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
