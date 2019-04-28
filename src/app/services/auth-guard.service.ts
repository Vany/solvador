import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

const USERKEY = 'userId';

export class User {
    name: string;
    publicKey: string;
    privateKey: string;
    role: string;
    wallet?: string;
}

@Injectable()
export class AuthGuardService implements CanActivate  {
    authenticatedUser = '';

    users: User[] = [
        {name: 'user_1', role: 'customer', privateKey: '', publicKey: ''},
        {name: 'user_2', role: 'customer', privateKey: '', publicKey: ''},
        {name: 'notary_1', role: 'notary', privateKey: '', publicKey: ''},
        {name: 'notary_2', role: 'notary', privateKey: '', publicKey: ''},
        {name: 'notary_3', role: 'notary', privateKey: '', publicKey: ''},
        {name: 'notary_4', role: 'notary', privateKey: '', publicKey: ''},
        {name: 'notary_5', role: 'notary', privateKey: '', publicKey: ''},
    ];

    constructor() { }

    getUserList(): User[] {
        return this.users;
    }

    getAuthenticatedUser(): string {
        this.authenticatedUser = localStorage.getItem(USERKEY);
        console.log('getAuthenticatedUser(): ', this.authenticatedUser);
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

    login(name: string) {
      console.log('login:' + name);
      this.authenticatedUser = name;
      localStorage.setItem(USERKEY, name);
    }

    logout() {
      console.log('logout');
      this.authenticatedUser = '';
      localStorage.setItem(USERKEY, this.authenticatedUser);
    }

}
