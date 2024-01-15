import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSecundarionComponent } from './boton-secundarion.component';

describe('BotonSecundarionComponent', () => {
  let component: BotonSecundarionComponent;
  let fixture: ComponentFixture<BotonSecundarionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BotonSecundarionComponent]
    });
    fixture = TestBed.createComponent(BotonSecundarionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
