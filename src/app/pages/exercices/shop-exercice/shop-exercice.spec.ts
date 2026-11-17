import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopExercice } from './shop-exercice';

describe('ShopExercice', () => {
  let component: ShopExercice;
  let fixture: ComponentFixture<ShopExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
