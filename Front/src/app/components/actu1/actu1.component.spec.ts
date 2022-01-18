import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actu1Component } from './actu1.component';

describe('Actu1Component', () => {
  let component: Actu1Component;
  let fixture: ComponentFixture<Actu1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actu1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Actu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
