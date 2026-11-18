import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopCartServiceExercice } from './shop-cart-service-exercice';

describe('ShopCartServiceExercice', () => {
  let component: ShopCartServiceExercice;
  let fixture: ComponentFixture<ShopCartServiceExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopCartServiceExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopCartServiceExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
