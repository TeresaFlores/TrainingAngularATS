import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}
  private movies = [
    {
      pic: 'assets/movies/movie (1).jpg',
      name: 'Alien Planet',
      description: 'People get trapped in alien planet, big WOW',
      times: ['13:00', '15:00', '19:00'],
    },
    {
      pic: 'assets/movies/movie (2).jpg',
      name: 'Super Hunger Games',
      description: 'Katnis is super hungry, she needs to eat bunnies now',
      times: ['10:00', '14:00'],
    },
    {
      pic: 'assets/movies/movie (3).jpg',
      name: 'Shrozen',
      description: 'Shrek meets Elsa to build a frozen swamp',
      times: ['14:00', '15:00', '16:00', '17:00'],
    },
    {
      pic: 'assets/movies/movie (4).jpg',
      name: 'Looney Killer',
      description:
        'Bugs Bunny is a hired assassin, nobody messes with his carrots',
      times: ['13:00', '17:00', '19:00'],
    },
    {
      pic: 'assets/movies/movie (5).jpg',
      name: 'Lord of the Chickens',
      description: 'One chicken to rule them all',
      times: ['11:00', '15:00', '19:00'],
    },
    {
      pic: 'assets/movies/movie (6).jpg',
      name: 'Cattronaut',
      description: 'Cats in space... yes it is what it is',
      times: ['13:00', '15:00', '19:00', '20:00'],
    },
    {
      pic: 'assets/movies/movie (7).jpg',
      name: 'CatsAway',
      description:
        'He got stranded in the middle of the ocean, with his dogs...',
      times: ['13:00', '14:00', '19:00'],
    },
    {
      pic: 'assets/movies/movie (8).jpg',
      name: 'Dora vs The Dragon',
      description: 'Help me fight this dragon kids!',
      times: ['13:00', '15:00', '19:00'],
    },
    {
      pic: 'assets/movies/movie (9).jpg',
      name: 'Sponge-less',
      description: 'Who lives in a... nowhere, spongebob',
      times: ['12:00', '13:00', '19:00'],
    },
    {
      pic: 'assets/movies/movie (10).jpg',
      name: 'Harry Potter 10: the revenge of the wizard',
      description: 'Harry Potter is back, WITH A VENGANCE!',
      times: ['13:00', '20:00', '22:00'],
    },
  ];

  getMovies(): typeof this.movies {
    return this.movies;
  }

  getMovie(index: number): (typeof this.movies)[number] {
    const safeIndex = 0;
    if (index > this.movies.length - 1 || index < 0) {
      return this.movies[safeIndex];
    }
    return this.movies[index];
  }
}
