import { Component, OnInit } from '@angular/core';
import {AuthGuardService, User} from '../../services/auth-guard.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  users: User[];
  constructor(private auth: AuthGuardService, private route: Router) { }

  ngOnInit() {
    this.users = this.auth.getUserList();
  }

  login(name: string) {
    this.auth.login(name);
    this.route.navigate(['/balance']);
  }

}
