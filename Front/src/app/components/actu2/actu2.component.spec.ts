import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actu2Component } from './actu2.component';

describe('Actu2Component', () => {
  let component: Actu2Component;
  let fixture: ComponentFixture<Actu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actu2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Actu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
