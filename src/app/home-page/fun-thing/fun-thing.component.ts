import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun-thing',
  templateUrl: './fun-thing.component.html',
  styleUrls: ['./fun-thing.component.css'],
})
export class FunThingComponent implements OnInit {
  fact: string;
  constructor() {}

  ngOnInit(): void {
    this.fact = 'An owl has three eyelids';
  }
}
