import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelsLesson } from './models-lesson';

describe('ModelsLesson', () => {
  let component: ModelsLesson;
  let fixture: ComponentFixture<ModelsLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelsLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(ModelsLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
