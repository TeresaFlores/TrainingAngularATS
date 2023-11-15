import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { ToastService } from '../services/toast.service';

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
    private moviesService: MoviesService,
    private toastService: ToastService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(({ movieID }) => {
      this.movieIndex = isNaN(Math.floor(+movieID)) ? 0 : Math.floor(+movieID);
      this.movie = this.moviesService.getMovie(this.movieIndex);
    });
  }

  buyTicket(hour: string) {
    this.toastService.setMessage(
      `bought ticket for the ${this.movie.name} at ${hour}`
    );
  }
}
