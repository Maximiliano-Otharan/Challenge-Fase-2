import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoYBotonesComponent } from './logo-y-botones.component';

describe('LogoYBotonesComponent', () => {
  let component: LogoYBotonesComponent;
  let fixture: ComponentFixture<LogoYBotonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LogoYBotonesComponent]
    });
    fixture = TestBed.createComponent(LogoYBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
