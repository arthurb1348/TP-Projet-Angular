import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirebaseLesson } from './firebase-lesson';

describe('FirebaseLesson', () => {
  let component: FirebaseLesson;
  let fixture: ComponentFixture<FirebaseLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirebaseLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(FirebaseLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
