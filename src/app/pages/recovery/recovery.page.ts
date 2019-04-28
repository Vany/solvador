import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-recovery',
    templateUrl: './recovery.page.html',
    styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {
    address: string;
    private signs: Array<{ label: string; value: string; number: number }> = [];

    constructor() {
        this.signs.push({label: 'первого', value: '', number: 1});
        this.signs.push({label: 'второго', value: '', number: 2});
        this.signs.push({label: 'третьего', value: '', number: 3});
    }

    ngOnInit() {
    }

    recovery() {
        // todo call recovery
        console.log('start recovering');
        console.log(this.signs[0]);
        console.log(this.signs[1]);
        console.log(this.signs[2]);
    }

}
