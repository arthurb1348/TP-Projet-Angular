import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentCommunicationLesson } from './component-communication-lesson';

describe('ComponentCommunicationLesson', () => {
  let component: ComponentCommunicationLesson;
  let fixture: ComponentFixture<ComponentCommunicationLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentCommunicationLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentCommunicationLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
