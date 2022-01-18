import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNouveauxFilmsComponent } from './home-nouveaux-films.component';

describe('HomeNouveauxFilmsComponent', () => {
  let component: HomeNouveauxFilmsComponent;
  let fixture: ComponentFixture<HomeNouveauxFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeNouveauxFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNouveauxFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
