import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-setup-wallet',
    templateUrl: './setup-wallet.page.html',
    styleUrls: ['./setup-wallet.page.scss'],
})
export class SetupWalletPage implements OnInit {

    public privateKey: string;
    public publicKey: string;
    private signs: Array<{ label: string; value: string; number: number }> = [];

    constructor() {
        this.signs.push({label: 'First', value: '', number: 1});
        this.signs.push({label: 'Second', value: '', number: 2});
        this.signs.push({label: 'Third', value: '', number: 3});
    }

    ngOnInit() {
    }

    setup() {
      // todo handle click button event
    }
}


