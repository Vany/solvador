import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

const USERKEY = 'userId';

export class User {
    name: string;
    publicKey: string;
    privateKey: string;
    role: string;
    wallet?: string;
    notarySign1?: string;
    notarySign2?: string;
    notarySign3?: string;
}

@Injectable()
export class AuthGuardService implements CanActivate {
    authenticatedUser = '';

    users: User[] = [
        {
            name: 'user_1', role: 'customer',
            privateKey: 'A06EE48D9F0E637636B24925C964572BCDB8991E4B2EF357A79E9BD2292CFA7B',
            publicKey: '0xA85f0407Bf7d5Aeb7E776573659e85Af32eD40ed',
            wallet: '',
            notarySign1: '0xe36e82518b0645eea07e39e26f53993794e1741c92cca3c3fe829b16b6b84bdd',
            notarySign2: '0xdd80f5af7ebd9e2db38727afd5a607f9974dc52c37b8a6444e5a63a3e0c2ddca',
            notarySign3: '0x5c0eaf17d313190bc41e2fc69df3814ad3c7d1ba116b521d2579ca1de5dfd420',
        },
        {
            name: 'user_2', role: 'customer', privateKey: '248848DE6E5998C6806D06A6B3C6F4805A637D505552FE2847879300A7996296',
            publicKey: '0xCda9b80aBa2B7847C475eDF5885DFEd789ABE834', wallet: ''
        },
        {name: 'notary_1', role: 'notary', privateKey: '', publicKey: '0xF6336F704ea4423A0c392a29BC7B4Fcc9f6e05bE', wallet: ''},
        {name: 'notary_2', role: 'notary', privateKey: '', publicKey: '', wallet: ''},
        {name: 'notary_3', role: 'notary', privateKey: '', publicKey: '', wallet: ''},
        {name: 'notary_4', role: 'notary', privateKey: '', publicKey: '', wallet: ''},
        {name: 'notary_5', role: 'notary', privateKey: '', publicKey: '', wallet: ''},
    ];

    constructor() {
    }

    getUserList(): User[] {
        return this.users;
    }

    getAuthenticatedUser(): User {
        this.authenticatedUser = localStorage.getItem(USERKEY);
        const currentUser = this.users.find(x => x.name === this.authenticatedUser);
        console.log('getAuthenticatedUser(): ', currentUser);
        return currentUser;
    }

    canActivate(): boolean {
        this.authenticatedUser = localStorage.getItem(USERKEY);
        const isAuth = (this.authenticatedUser && this.authenticatedUser !== '');
        console.log('AuthGuard#canActivate called: ' + isAuth);
        // return isAuth;
        return true;
    }

    createUser(): string {
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
