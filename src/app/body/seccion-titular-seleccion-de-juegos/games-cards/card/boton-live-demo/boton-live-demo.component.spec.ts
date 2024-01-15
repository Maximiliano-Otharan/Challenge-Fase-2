import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonLiveDemoComponent } from './boton-live-demo.component';

describe('BotonLiveDemoComponent', () => {
  let component: BotonLiveDemoComponent;
  let fixture: ComponentFixture<BotonLiveDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BotonLiveDemoComponent]
    });
    fixture = TestBed.createComponent(BotonLiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
