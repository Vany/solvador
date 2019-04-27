import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

const USERKEY = 'userId';

@Injectable()
export class AuthGuardService implements CanActivate  {
    authenticatedUser = '';

    constructor() { }

    getUthenticatedUser(): string {
        this.authenticatedUser = localStorage.getItem(USERKEY);
        return this.authenticatedUser;
    }

    canActivate(): boolean {
        this.authenticatedUser = localStorage.getItem(USERKEY);
        const isAuth = (this.authenticatedUser && this.authenticatedUser !== '');
        console.log('AuthGuard#canActivate called: ' + isAuth);
        // return isAuth;
        return true;
    }

    createUser(): string  {
        // this.http.get()
        return ''; // call api
    }

    // login (username: string) {
    //   console.log('login:' + username);
    //   this.authenticatedUser = username;
    //   localStorage.setItem('authenticatedUser', this.authenticatedUser);
    // }
    //
    // logout() {
    //   console.log('logout');
    //   this.authenticatedUser = '';
    //   localStorage.setItem('authenticatedUser', this.authenticatedUser);
    // }

}
