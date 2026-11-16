import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservablesSimpleExercice } from './observables-simple-exercice';

describe('ObservablesSimpleExercice', () => {
  let component: ObservablesSimpleExercice;
  let fixture: ComponentFixture<ObservablesSimpleExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesSimpleExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservablesSimpleExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
