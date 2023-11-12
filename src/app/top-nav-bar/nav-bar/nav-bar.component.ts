import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  homeIcon = 'assets/icons/home-icon.svg';
  ticketIcon = 'assets/icons/ticket-icon.svg';
  foodIcon = 'assets/icons/food-icon.svg';
  contactIcon = 'assets/icons/contact-icon.svg';
  displayMobile = false;
  activeLink = '/';
  constructor() {}

  ngOnInit(): void {}

  changeClass() {
    this.displayMobile = !this.displayMobile;
  }

  setActiveLink(link: string) {
    this.activeLink = link;
  }
}
