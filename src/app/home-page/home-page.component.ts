import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  movies: MoviesService['movies'] = [];
  constructor(private moviesService: MoviesService, private router: Router) {
    this.movies = moviesService.getMovies();
  }
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

  goToMovie(index: number) {
    this.router.navigateByUrl(`/tickets?movieID=${index}`);
  }
}
