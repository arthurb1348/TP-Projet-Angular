import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCardLesson } from './user-card-lesson';

describe('UserCardLesson', () => {
  let component: UserCardLesson;
  let fixture: ComponentFixture<UserCardLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
