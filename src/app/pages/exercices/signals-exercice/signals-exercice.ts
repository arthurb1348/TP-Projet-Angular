import { Component, signal, computed } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signals-exercice',
  styleUrl: './signals-exercice.css',
  templateUrl: './signals-exercice.html',
})
export class SignalsExercice {
  quantity = signal<number>(1);
  unitPrice = signal<number>(35);
  discountPercent = signal< 0 | 10 | 20 >(0);
  isExpressShipping = signal<boolean>(false);

  subtotal = computed(() => this.quantity() * this.unitPrice());
  discountAmount = computed(() => (this.subtotal() * this.discountPercent()) / 100);
  shippingFee = computed(() => {
    if (this.quantity() === 0) { 
      return 0;
    }
    if (this.isExpressShipping()) {
      return 12;
    } else if (this.subtotal() >= 100) {
      return 0;
    } else {
      return 5;
    }
  });
  total = computed(() => (this.subtotal() - this.discountAmount() + this.shippingFee() > 0 ? this.subtotal() - this.discountAmount() + this.shippingFee() : 0));
  
  constructor() {
    // Effet pour surveiller les changements et afficher les valeurs dans la console
    const cart_demo_signal = computed(() => {
      console.log(`Quantité: ${this.quantity()}, Prix Unitaire: ${this.unitPrice()}, Sous-total: ${this.subtotal()}, Remise: ${this.discountAmount()}, Livraison: ${this.shippingFee()}, Total: ${this.total()}`);
    });
  }

  incrementQuantity() {
    this.quantity.update((q) => q + 1);
  }

  decrementQuantity() {
    this.quantity.update((q) => (q > 0 ? q - 1 : 0));
  }

  setDiscount(percent: 0 | 10 | 20) {
    this.discountPercent.set(percent);
  }

  toggleExpressShipping() {
    this.isExpressShipping.update((current) => !current);
  }

  resetCart() {
    this.quantity.set(0);
    this.unitPrice.set(35);
    this.discountPercent.set(0);
    this.isExpressShipping.set(false);
  }
}