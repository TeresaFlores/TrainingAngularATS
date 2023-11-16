import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
export type Item = { item: string; price: number };
export type Currency = 'USD' | 'EUR' | 'MXN';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject<Item[]>([]);
  private currency = new Subject<Currency>();
  cartItems$ = this.cart.asObservable();
  currency$ = this.currency.asObservable();
  constructor() {}

  addItem(item: Item) {
    this.cart.next([...this.cart.value, item]);
  }

  clearCart() {
    this.cart.next([]);
  }

  changeCurrency(currency: Currency) {
    this.currency.next(currency);
  }
}
