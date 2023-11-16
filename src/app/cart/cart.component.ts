import { Component, OnDestroy } from '@angular/core';
import { CartService, Currency, Item } from '../services/cart.service';
import { Subscription } from 'rxjs';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnDestroy {
  itemsInCart: Item[] = [];
  currency: Currency = 'USD';
  total: number = 0;
  private cartSubscription: Subscription;
  private currencySubscription: Subscription;
  constructor(
    private cartService: CartService,
    private toastService: ToastService
  ) {
    this.cartSubscription = this.cartService.cartItems$.subscribe((items) => {
      this.itemsInCart = items;
      this.total = this.itemsInCart.reduce(
        (prev, current) => prev + current.price,
        0
      );
    });
    this.currencySubscription = this.cartService.currency$.subscribe((val) => {
      this.currency = val;
    });
  }

  clearCart() {
    this.cartService.clearCart();
  }

  pay() {
    this.toastService.setMessage('Purchase completed!');
    this.cartService.clearCart();
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
    this.currencySubscription.unsubscribe();
  }
}
