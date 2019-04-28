import {Component, OnInit} from '@angular/core';
import { BlockchainService } from '../../services/blockchain/blockchain.service';
import {AuthGuardService, User} from '../../services/auth-guard.service';
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
    constructor(private bcService: BlockchainService, private auth: AuthGuardService) {
        this.user = this.auth.getAuthenticatedUser();

        this.signs.push({label: 'первого', value: '', number: 1});
        this.signs.push({label: 'второго', value: '', number: 2});
        this.signs.push({label: 'третьего', value: '', number: 3});
    }

    ngOnInit() {
    }

    async setup() {
      // todo handle click button event
        console.log('setup');
        const wallet = await this.bcService.deployContract(this.user.publicKey, this.user.privateKey);
        this.user.wallet = wallet;
    }
}


