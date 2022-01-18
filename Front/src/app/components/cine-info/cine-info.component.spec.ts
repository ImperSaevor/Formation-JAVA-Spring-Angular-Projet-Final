import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CineInfoComponent } from './cine-info.component';

describe('CineInfoComponent', () => {
  let component: CineInfoComponent;
  let fixture: ComponentFixture<CineInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CineInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CineInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
