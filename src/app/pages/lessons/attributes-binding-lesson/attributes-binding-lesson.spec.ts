import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttributesBindingLesson } from './attributes-binding-lesson';

describe('AttributesBindingLesson', () => {
  let component: AttributesBindingLesson;
  let fixture: ComponentFixture<AttributesBindingLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributesBindingLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(AttributesBindingLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
