import { Component, OnInit } from '@angular/core';
import { Carousel } from 'bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}
  movies = [
    {
      pic: 'assets/movies/movie (1).jpg',
      name: 'Alien Planet',
      description: 'People get trapped in alien planet, big WOW',
    },
    {
      pic: 'assets/movies/movie (2).jpg',
      name: 'Super Hunger Games',
      description: 'Katnis is super hungry, she needs to eat bunnies now',
    },
    {
      pic: 'assets/movies/movie (3).jpg',
      name: 'Shrozen',
      description: 'Shrek meets Elsa to build a frozen swamp',
    },
    {
      pic: 'assets/movies/movie (4).jpg',
      name: 'Looney Killer',
      description:
        'Bugs Bunny is a hired assassin, nobody messes with his carrots',
    },
    {
      pic: 'assets/movies/movie (5).jpg',
      name: 'Lord of the Chickens',
      description: 'One chicken to rule them all',
    },
    {
      pic: 'assets/movies/movie (6).jpg',
      name: 'Cattronaut',
      description: 'Cats in space... yes it is what it is',
    },
    {
      pic: 'assets/movies/movie (7).jpg',
      name: 'CatsAway',
      description:
        'He got stranded in the middle of the ocean, with his dogs...',
    },
    {
      pic: 'assets/movies/movie (8).jpg',
      name: 'Dora vs The Dragon',
      description: 'Help me fight this dragon kids!',
    },
    {
      pic: 'assets/movies/movie (9).jpg',
      name: 'Sponge-less',
      description: 'Who lives in a... nowhere, spongebob',
    },
    {
      pic: 'assets/movies/movie (10).jpg',
      name: 'Harry Potter 10: the revenge of the wizard',
      description: 'Harry Potter is back, WITH A VENGANCE!',
    },
  ];
  displayMovie = 0;

  ngOnInit(): void {}

  nextMovie() {
    this.displayMovie =
      this.displayMovie >= this.movies.length - 1 ? 0 : ++this.displayMovie;
  }
  prevMovie() {
    this.displayMovie =
      this.displayMovie <= 0 ? this.movies.length - 1 : --this.displayMovie;
  }
  selectMovie(movie: number) {
    this.displayMovie = movie;
  }
}
