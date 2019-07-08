import { Component, OnInit, Optional } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { NavBarService } from 'src/app/nav-bar/service/nav-bar.service';
import { transition, query, animate, trigger, style, stagger } from '@angular/animations';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-50px)' }),
            stagger(
              '50ms',
              animate(
                '500ms ease-in',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [animate('500ms', style({ opacity: 0, transform: 'rotate(90deg)' }))],
          { optional: true }
        )
      ])
    ])
  ]
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  loadingMovies: Array<number>;

  constructor(private navBarService: NavBarService, private movieService: MovieService) { }

  ngOnInit() {
    //  filling a new array with 10 numbers
    this.loadingMovies = new Array(10).fill(0).map((n, index) => index);
    console.log(this.loadingMovies);
    this.movies$ = this.movieService.getMoviesFromHttp();
    this.navBarService.title.next('MovieNight');
  }

}
