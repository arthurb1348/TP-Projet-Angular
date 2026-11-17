import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientLesson } from './http-client-lesson';

describe('HttpClientLesson', () => {
  let component: HttpClientLesson;
  let fixture: ComponentFixture<HttpClientLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpClientLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
