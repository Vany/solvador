import { Component, OnInit } from '@angular/core';
import {AuthGuardService, User} from '../../services/auth-guard.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  users: User[];
  constructor(private auth: AuthGuardService, private route: Router, private router: ActivatedRoute) {
    router.params.subscribe(val => {
      this.users = this.auth.getUserList();
      if (this.router.snapshot.fragment === 'logout') {
        this.logout();
      }
    });
  }

  ngOnInit() {
    this.users = this.auth.getUserList();
    if (this.router.snapshot.fragment === 'logout') {
      this.logout();
    }
  }


  login(name: string) {
    this.auth.login(name);
    this.route.navigate(['/balance']);
  }

  logout() {
    console.log('Call logout');
    this.auth.logout();
  }

}
