import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesInjectionLesson } from './services-injection-lesson';

describe('ServicesInjectionLesson', () => {
  let component: ServicesInjectionLesson;
  let fixture: ComponentFixture<ServicesInjectionLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesInjectionLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesInjectionLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
