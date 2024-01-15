import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogotipoEInformacionDeLaEmpresaComponent } from './logotipo-e-informacion-de-la-empresa.component';

describe('LogotipoEInformacionDeLaEmpresaComponent', () => {
  let component: LogotipoEInformacionDeLaEmpresaComponent;
  let fixture: ComponentFixture<LogotipoEInformacionDeLaEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LogotipoEInformacionDeLaEmpresaComponent]
    });
    fixture = TestBed.createComponent(LogotipoEInformacionDeLaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
