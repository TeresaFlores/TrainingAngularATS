import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService, Currency } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  homeIcon = 'assets/icons/home-icon.svg';
  ticketIcon = 'assets/icons/ticket-icon.svg';
  foodIcon = 'assets/icons/food-icon.svg';
  contactIcon = 'assets/icons/contact-icon.svg';
  displayMobile = false;
  currencySubscription: Subscription;
  currency: Currency = 'USD';
  constructor(private cartService: CartService) {
    this.currencySubscription = cartService.currency$.subscribe((val) => {
      this.currency = val;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.currencySubscription.unsubscribe();
  }

  changeClass() {
    this.displayMobile = !this.displayMobile;
  }

  changeCurrency(val: Currency) {
    this.cartService.changeCurrency(val);
  }
}
