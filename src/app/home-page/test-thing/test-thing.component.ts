import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-thing',
  templateUrl: './test-thing.component.html',
  styleUrls: ['./test-thing.component.css'],
})
export class TestThingComponent implements OnInit {
  source: string;
  redColor: boolean;
  constructor() {}

  ngOnInit(): void {
    this.source =
      'https://images.unsplash.com/photo-1698464795984-9da9eb4a99cd?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  }

  changePicture() {
    this.source =
      Math.random() > 0.5
        ? 'https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&q=80&w=1802&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        : 'https://images.unsplash.com/photo-1698464795984-9da9eb4a99cd?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    this.redColor = !this.redColor;
  }
}
