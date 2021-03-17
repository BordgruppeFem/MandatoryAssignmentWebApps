import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import Movie from 'src/app/models/movie';
import { FetchMoviesService } from 'src/app/Services/fetch-movies.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css'],
})
export class MoviedetailComponent implements OnInit {
  public movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private fetchMovie: FetchMoviesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      this.fetchMovie.getMovie(id).subscribe((movie) => {
        this.movie = movie;
      });
    });
  }
}
