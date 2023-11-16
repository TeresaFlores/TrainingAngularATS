import { Component, OnDestroy } from '@angular/core';
import { FoodsService } from '../services/foods.service';
import { CartService, Currency, Item } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnDestroy {
  foods: FoodsService['foods'] = [];
  currency: Currency = 'USD';
  currencySubscription: Subscription;
  constructor(
    private foodsService: FoodsService,
    private cartService: CartService
  ) {
    this.foods = foodsService.getFoods();
    this.currencySubscription = cartService.currency$.subscribe((val) => {
      this.currency = val;
    });
  }

  ngOnDestroy(): void {
    this.currencySubscription.unsubscribe();
  }

  addItemToCart(foodItem: FoodsService['foods'][number]) {
    const cartItem: Item = {
      item: foodItem.name,
      price: foodItem.price,
    };
    this.cartService.addItem(cartItem);
  }
}
