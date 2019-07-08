import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavBarService } from 'src/app/nav-bar/service/nav-bar.service';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movieForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    releaseYear: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private navBarService: NavBarService, private movieService: MovieService) { }

  ngOnInit() {
    this.navBarService.title.next('Add Movies');
  }

  addMovie() {
    this.movieService.addMovie(this.movieForm.value).subscribe(res => {
      this.movieForm.reset();
      this.router.navigate(['/movies']);
    });
  }


}
