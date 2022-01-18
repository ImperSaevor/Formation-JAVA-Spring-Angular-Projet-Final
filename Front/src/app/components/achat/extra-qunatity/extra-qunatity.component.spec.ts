import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraQunatityComponent } from './extra-qunatity.component';

describe('ExtraQunatityComponent', () => {
  let component: ExtraQunatityComponent;
  let fixture: ComponentFixture<ExtraQunatityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraQunatityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraQunatityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
