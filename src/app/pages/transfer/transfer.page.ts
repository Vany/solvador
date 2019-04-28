import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-transfer',
    templateUrl: './transfer.page.html',
    styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {
    recipient: string;
    amount: number;
    assetList: string[] = ['ETH'];
    asset: string;

    constructor() {
        this.asset = this.assetList[0];
    }

    ngOnInit() {
    }

    transfer() {
        console.log(this.amount);
        console.log(this.recipient);
        console.log(this.asset);
    }

    setAsset(asset: string) {
        this.asset = asset;
    }
}
