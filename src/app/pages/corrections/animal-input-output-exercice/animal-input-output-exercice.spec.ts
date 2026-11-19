import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalInputOutputExercice } from './animal-input-output-exercice';

describe('AnimalInputOutputExercice', () => {
  let component: AnimalInputOutputExercice;
  let fixture: ComponentFixture<AnimalInputOutputExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalInputOutputExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalInputOutputExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
