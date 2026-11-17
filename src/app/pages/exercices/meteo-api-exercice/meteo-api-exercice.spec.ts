import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeteoApiExercice } from './meteo-api-exercice';

describe('MeteoApiExercice', () => {
  let component: MeteoApiExercice;
  let fixture: ComponentFixture<MeteoApiExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeteoApiExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(MeteoApiExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
