import { Component, Input, OnInit } from '@angular/core';
import { Carousel } from 'bootstrap';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  movies: MoviesService['movies'] = [];
  constructor(private service: MoviesService) {
    this.movies = service.getMovies();
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
}
