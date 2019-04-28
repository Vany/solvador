import {Component, OnInit} from '@angular/core';
import {AuthGuardService} from '../../services/auth-guard.service';

@Component({
    selector: 'app-recovery',
    templateUrl: './recovery.page.html',
    styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage implements OnInit {
    address: string;
    private signs: Array<{ label: string; value: string; number: number }> = [];

    constructor(private userService: AuthGuardService,) {
        this.signs.push({label: 'первого', value: '', number: 1});
        this.signs.push({label: 'второго', value: '', number: 2});
        this.signs.push({label: 'третьего', value: '', number: 3});
    }

    ngOnInit() {
        const user = this.userService.getAuthenticatedUser();
        this.address = user.wallet;
    }

    recovery() {
        // todo call recovery
        console.log('start recovering');
        console.log(this.signs[0]);
        console.log(this.signs[1]);
        console.log(this.signs[2]);
    }

    setTestData() {
        const user = this.userService.getAuthenticatedUser();
        this.signs[0].value = user.notarySign1;
        this.signs[1].value = user.notarySign2;
        this.signs[2].value = user.notarySign3;
    }

}
