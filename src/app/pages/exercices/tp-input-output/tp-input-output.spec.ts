import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TpInputOutput } from './tp-input-output';

describe('TpInputOutput', () => {
  let component: TpInputOutput;
  let fixture: ComponentFixture<TpInputOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpInputOutput],
    }).compileComponents();

    fixture = TestBed.createComponent(TpInputOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
