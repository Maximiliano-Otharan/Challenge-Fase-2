import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlacesDeNavegacionComponent } from './enlaces-de-navegacion.component';

describe('EnlacesDeNavegacionComponent', () => {
  let component: EnlacesDeNavegacionComponent;
  let fixture: ComponentFixture<EnlacesDeNavegacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EnlacesDeNavegacionComponent]
    });
    fixture = TestBed.createComponent(EnlacesDeNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
