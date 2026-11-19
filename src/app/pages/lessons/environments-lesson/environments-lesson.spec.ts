import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvironmentsLesson } from './environments-lesson';

describe('EnvironmentsLesson', () => {
  let component: EnvironmentsLesson;
  let fixture: ComponentFixture<EnvironmentsLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentsLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(EnvironmentsLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
