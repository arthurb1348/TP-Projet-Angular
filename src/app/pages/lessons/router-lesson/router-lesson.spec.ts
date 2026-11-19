import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLesson } from './router-lesson';

describe('RouterLesson', () => {
  let component: RouterLesson;
  let fixture: ComponentFixture<RouterLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
