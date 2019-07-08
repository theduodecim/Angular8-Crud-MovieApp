import { Component, OnInit } from '@angular/core';
import { NavBarService } from './service/nav-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  title$ = this.navbarService.title;
  constructor(private navbarService: NavBarService, private router: Router) { }

  ngOnInit() {
  }

}
