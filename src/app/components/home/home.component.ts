import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor() {}

  movies = [
    {
      image: 'assets/movies/spiderverse.jpg',
      name: 'Spiderman into the Spiderverse',
      description: 'People get trapped in alien planet, big WOW',
    },
    {
      image: 'assets/movies/starwars.jpg',
      name: 'Star Wars Revenge of the Siths',
      description: 'Katnis is super hungry, she needs to eat bunnies now',
    },
    {
      image: 'assets/movies/harrypotter.jpg',
      name: 'Harry Potter and The Halfblodd Prince',
      description: 'Shrek meets Elsa to build a frozen swamp',
    },
    {
      image: 'assets/movies/loveme.jpg',
      name: 'Love me if you dare',
      description:
        'Bugs Bunny is a hired assassin, nobody messes with his carrots',
    },
    {
      image: 'assets/movies/amantes.jpg',
      name: 'Los Amantes del Circulo Polar',
      description: 'One chicken to rule them all',
    },
    {
      image: 'assets/movies/tomatoes.jpg',
      name: 'Fried Green Tomatoes',
      description: 'Cats in space... yes it is what it is',
    },
    {
      image: 'assets/movies/lotr.jpg',
      name: 'Lord of The Rings and The Return of The king',
      description:
        'He got stranded in the middle of the ocean, with his dogs...',
    },
    {
      image: 'assets/movies/dune.jpg',
      name: 'Dune',
      description: 'Help me fight this dragon kids!',
    },
    {
      image: 'assets/movies/wonka.jpg',
      name: 'Willy Wonka',
      description: 'Who lives in a... nowhere, spongebob',
    },
    {
      image: 'assets/movies/prada.jpg',
      name: 'The Devil Wears Prada',
      description: 'Harry Potter is back, WITH A VENGANCE!',
    },
  ];

  currentMovieIndex = 0;

  ngOnInit(): void {}

  next() {
    this.currentMovieIndex =
      this.currentMovieIndex >= this.movies.length - 1
        ? 0
        : ++this.currentMovieIndex;
  }
  prev() {
    this.currentMovieIndex =
      this.currentMovieIndex <= 0
        ? this.movies.length - 1
        : --this.currentMovieIndex;
  }

  newIndex(movie: number) {
    this.currentMovieIndex = movie;
  }
}
