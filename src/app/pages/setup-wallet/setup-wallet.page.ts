import {Component, OnInit} from '@angular/core';
import {AuthGuardService} from '../../services/auth-guard.service';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-setup-wallet',
    templateUrl: './setup-wallet.page.html',
    styleUrls: ['./setup-wallet.page.scss'],
})
export class SetupWalletPage implements OnInit {

    public privateKey: string;
    public publicKey: string;
    private signs: Array<{ label: string; value: string; number: number }> = [];

    constructor(public userService: AuthGuardService, public navCtrl: NavController) {
        this.signs.push({label: 'первого', value: '', number: 1});
        this.signs.push({label: 'второго', value: '', number: 2});
        this.signs.push({label: 'третьего', value: '', number: 3});
    }

    ngOnInit() {
    }

    setup() {
        // todo handle click button event
        this.userService.getAuthenticatedUser().wallet = '12313131';
        this.navCtrl.navigateRoot('setup-result').then(r => {
                console.log('navigated');
            }
        );
    }


}


