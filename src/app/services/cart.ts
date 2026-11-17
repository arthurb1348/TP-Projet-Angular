import { computed, Service, signal } from '@angular/core';
import type { CartItem, Product } from '../models/shop.model';

@Service()
export class CartService {
    private readonly _items = signal<CartItem[]>([]);
    readonly items = this._items.asReadonly();

    readonly totalQuantity = computed(() =>
        this.items().reduce((sum, item) => sum + item.quantity, 0),
    );

    readonly subtotal = computed(() => {
        const cents = this.items().reduce(
            (sum, item) => sum + Math.round(item.product.price * 100) * item.quantity,
            0,
        );
        return cents / 100;
    });

    private readonly _promoCode = signal('');
    readonly promoCode = this._promoCode.asReadonly();
    readonly promoIsValid = computed(() => this.promoCode() === 'ADRAR20');

    readonly discount = computed(() =>
        this.promoIsValid() ? Math.round(this.subtotal() * 0.2 * 100) / 100 : 0,
    );

    readonly total = computed(() =>
        Math.round((this.subtotal() - this.discount()) * 100) / 100,
    );

    addProduct(product: Product): void {
        this.setQuantity(product, this.quantityOf(product.id) + 1);
    }

    updateQuantity(productId: number, delta: number): void {
        const item = this.items().find(({ product }) => product.id === productId);
        if (!item || !Number.isInteger(delta)) return;

        this.setQuantity(item.product, item.quantity + delta);
    }

    remainingStock(product: Product): number {
        return Math.max(0, product.stock - this.quantityOf(product.id));
    }

    removeProduct(productId: number): void {
        const remaining = this.items().filter(({ product }) => product.id !== productId);

        if (remaining.length === 0) {
            this.clearCart();
            return;
        }

        this._items.set(remaining);
    }

    clearCart(): void {
        this._items.set([]);
        this._promoCode.set('');
    }

    applyPromoCode(code: string): void {
        this._promoCode.set(code.trim().toUpperCase());
    }

    private quantityOf(productId: number): number {
        return this.items().find(({ product }) => product.id === productId)?.quantity ?? 0;
    }

    private setQuantity(product: Product, quantity: number): void {
        const nextQuantity = Math.min(quantity, product.stock);

        if (nextQuantity <= 0) {
            this.removeProduct(product.id);
            return;
        }

        const updatedItem: CartItem = { product, quantity: nextQuantity };

        this._items.update((items) => {
            const index = items.findIndex((item) => item.product.id === product.id);
            if (index === -1) return [...items, updatedItem];

            return items.map((item, position) => position === index ? updatedItem : item);
        });
    }
}