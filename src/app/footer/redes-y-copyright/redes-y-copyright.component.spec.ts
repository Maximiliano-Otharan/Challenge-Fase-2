import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesYCopyrightComponent } from './redes-y-copyright.component';

describe('RedesYCopyrightComponent', () => {
  let component: RedesYCopyrightComponent;
  let fixture: ComponentFixture<RedesYCopyrightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RedesYCopyrightComponent]
    });
    fixture = TestBed.createComponent(RedesYCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
