import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-notary-sign',
    templateUrl: './notary-sign.page.html',
    styleUrls: ['./notary-sign.page.scss'],
})
export class NotarySignPage implements OnInit {
    dataForSign: string;
    privateKey: string;
    result: string;

    constructor() {
    }

    ngOnInit() {
    }

    sign() {
        if (this.dataForSign == null || this.dataForSign.length === 0 ||
            this.privateKey == null || this.privateKey.length === 0) {
            this.result = '';
            return;
        }
        this.result = 'sing_of_' + this.dataForSign;
    }
}
