import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonLogInComponent } from './boton-log-in.component';

describe('BotonLogInComponent', () => {
  let component: BotonLogInComponent;
  let fixture: ComponentFixture<BotonLogInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonLogInComponent]
    });
    fixture = TestBed.createComponent(BotonLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
