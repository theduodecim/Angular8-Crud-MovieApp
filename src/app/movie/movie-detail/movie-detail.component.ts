import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../models/movie.model';
import { NavBarService } from 'src/app/nav-bar/service/nav-bar.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id: number;
  movie: Movie;
  movieSub$: Subscription;
  constructor(private navBarService: NavBarService, private movieService: MovieService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    /*
        this.movieSub$ = this.movieService.movie(this.id).subscribe(movie => {
          this.movie = movie;
          this.navBarService.title.next(movie.name);
          console.log(this.movie);
        });
    */
    this.movieSub$ = this.movieService.movieFromHttp(this.id).subscribe((movie: any) => {
      this.movie = movie;
      this.navBarService.title.next(movie.name);
      console.log(this.movie);
    });

  }

  ngOnDestroy(): void {
    this.movieSub$.unsubscribe();
  }

}
