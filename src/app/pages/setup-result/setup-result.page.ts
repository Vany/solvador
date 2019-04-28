import {Component, OnInit} from '@angular/core';
import {AuthGuardService} from '../../services/auth-guard.service';


@Component({
    selector: 'app-setup-result',
    templateUrl: './setup-result.page.html',
    styleUrls: ['./setup-result.page.scss'],
})
export class SetupResultPage implements OnInit {

    publicKey: string;
    contractAddress: string;

    constructor(private userService: AuthGuardService) {
    }

    ngOnInit() {
        const user = this.userService.getAuthenticatedUser();
        this.contractAddress = user.wallet;
        this.publicKey = user.publicKey;
    }

}
