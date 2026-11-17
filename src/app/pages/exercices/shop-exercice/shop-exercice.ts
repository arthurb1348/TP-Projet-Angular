import { Component, inject } from '@angular/core';
import type { Product } from '../../../models/shop.model';
import { CartService } from '../../../services/cart';

@Component({
  selector: 'app-shop-exercice',
  templateUrl: './shop-exercice.html',
})
export class ShopExercice {
  readonly cartService = inject(CartService);

  readonly euros = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  });

  readonly products: Product[] = [
    { id: 1, name: 'Clavier Mécanique', price: 89.90, category: 'hardware', stock: 2, icon: '⌨️' },
    { id: 2, name: 'Formation Angular 22 Pro', price: 149, category: 'formation', stock: 10, icon: '🎓' },
    { id: 3, name: 'Mug ADRAR', price: 14.50, category: 'goodies', stock: 8, icon: '☕' },
    { id: 4, name: 'Souris Ergonomique', price: 59.90, category: 'hardware', stock: 3, icon: '⌨️'}
  ];

  submitPromo(event: Event, code: string): void {
    event.preventDefault();
    this.cartService.applyPromoCode(code);
  }
}