
import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain/blockchain.service';
import { AuthGuardService, User } from '../../services/auth-guard.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-setup-wallet',
    templateUrl: './setup-wallet.page.html',
    styleUrls: ['./setup-wallet.page.scss'],
})
export class SetupWalletPage implements OnInit {

    public privateKey: string;
    public publicKey: string;
    private signs: Array<{ label: string; value: string; number: number }> = [];

    user: User;
    constructor(private bcService: BlockchainService, private auth: AuthGuardService, public navCtrl: NavController) {
        this.user = this.auth.getAuthenticatedUser();
        this.signs.push({ label: 'первого', value: '', number: 1 });
        this.signs.push({ label: 'второго', value: '', number: 2 });
        this.signs.push({ label: 'третьего', value: '', number: 3 });
    }

    ngOnInit() {
        this.publicKey = this.user.publicKey;
    }

    async setup() {
        // todo handle click button event
        console.log('setup');
        // const wallet = await this.bcService.deployContract(this.user.publicKey, this.user.privateKey);
        // this.user.wallet = wallet;
        // this.navCtrl.navigateRoot('setup-result').then(r => {
        //     console.log('navigated');
        // }
        // );
        this.bcService.deployContract2(this.user.publicKey, this.user.privateKey).then(wallet => {
            this.user.wallet = wallet;
            this.navCtrl.navigateRoot('setup-result').then(r => {
                console.log('navigated');
            }
            );
        }
        );
    }

    async setup1() {
        console.log('send signature');
        //const wallet = await this.bcService.sendSignature(this.user.publicKey, this.user.privateKey, this.signs[0].value);
    }

    setTestData() {
        console.log(this.user);
        this.signs[0].value = this.user.notarySign1;
        this.signs[1].value = this.user.notarySign2;
        this.signs[2].value = this.user.notarySign3;
    }


}


