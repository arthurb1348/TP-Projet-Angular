import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiServiceExercice } from './api-service-exercice';

describe('ApiServiceExercice', () => {
  let component: ApiServiceExercice;
  let fixture: ComponentFixture<ApiServiceExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiServiceExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiServiceExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
