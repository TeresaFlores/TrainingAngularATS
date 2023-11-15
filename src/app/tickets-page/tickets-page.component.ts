import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tickets-page',
  templateUrl: './tickets-page.component.html',
  styleUrls: ['./tickets-page.component.css'],
})
export class TicketsPageComponent implements OnInit {
  movieIndex: number = 0;
  movie: MoviesService['movies'][number] = {
    pic: '',
    name: '',
    description: '',
    times: ['error'],
  };
  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(({ movieID }) => {
      this.movieIndex = isNaN(Math.floor(+movieID)) ? 0 : Math.floor(+movieID);
      this.movie = this.moviesService.getMovie(this.movieIndex);
    });
  }
}
