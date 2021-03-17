import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, Subscription } from 'rxjs';
import { catchError, filter, find, map, tap } from 'rxjs/operators';
import Movie from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class FetchMoviesService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    baseUrl: 'https://api.themoviedb.org/3/movie/',
    params: new HttpParams()
      .set('api_key', 'f096b92105251111f68717954f508196')
      .set('language', 'en-US')
      .set('page', '1'),
  };
  getMovies(): Observable<Movie[]> {
    return this.http
      .get(this.httpOptions.baseUrl + 'popular', this.httpOptions)
      .pipe(
        map((res: any) => {
          return res.results.map((item: Movie) => {
            return item;
          });
        })
      );
  }
  getMovie(id: number): Observable<Movie> {
    return this.http
      .get<Movie>(this.httpOptions.baseUrl + `${id}`, this.httpOptions)
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        })
      );
  }
}
