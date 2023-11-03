import { Component, OnInit } from '@angular/core';

type People = {
  name: string;
  email: string;
  moneys: number;
}[];
@Component({
  selector: 'app-persons-table',
  templateUrl: './persons-table.component.html',
  styleUrls: ['./persons-table.component.css'],
})
export class PersonsTableComponent implements OnInit {
  people: People = [];
  visible: boolean = false;
  currency: string = 'USD';
  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i < 40; i++) {
      this.people.push({
        name: `UniquePerson${i}`,
        email: `email${i}`,
        moneys: Math.random() * 1000,
      });
    }
  }

  hideShowTable() {
    this.visible = !this.visible;
  }
  changeCurrency() {
    const currencies = ['USD', 'MXN', 'EUR'];
    this.currency = currencies[Math.floor(Math.random() * 3)];
  }
}
