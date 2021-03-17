import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Movie from 'src/app/models/movie';
import { FetchMoviesService } from 'src/app/Services/fetch-movies.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
})
export class MovielistComponent implements OnInit {
  public movies$: Observable<Movie[]>;

  constructor(private fetchMovieService: FetchMoviesService) {}

  getMovies(): void {
    this.movies$ = this.fetchMovieService.getMovies();
  }

  ngOnInit(): void {
    this.getMovies();
  }
}
