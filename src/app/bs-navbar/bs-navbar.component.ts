import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {AppUser} from '../../models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  appUser: AppUser;

  constructor(private auth: AuthService, private authService: AuthService) {
    authService.appUser$
      .subscribe(user => {
        console.log(user);
        this.appUser = user;
      });
  }

  logout() {
    this.auth.logout();
  }
}
