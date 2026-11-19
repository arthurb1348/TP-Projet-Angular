import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskListFbExercice } from './task-list-fb-exercice';

describe('TaskListFbExercice', () => {
  let component: TaskListFbExercice;
  let fixture: ComponentFixture<TaskListFbExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListFbExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListFbExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
