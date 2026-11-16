import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicStylingExercice } from './dynamic-styling-exercice';

describe('DynamicStylingExercice', () => {
  let component: DynamicStylingExercice;
  let fixture: ComponentFixture<DynamicStylingExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicStylingExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicStylingExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
