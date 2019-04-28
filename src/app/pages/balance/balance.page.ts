import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain/blockchain.service';
import {NotaryService} from '../../services/notary.service';
import {AuthGuardService, User} from '../../services/auth-guard.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {

  public balances: Array<{ assetName: string; amount: number; }> = [
    {
      assetName: 'Ethereum',
      amount: 0
    }
  ];

  user: User;
  constructor(private bcService: BlockchainService, private auth: AuthGuardService, private route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.user = this.auth.getAuthenticatedUser();
      this.getBalance(this.user.publicKey);
    });
  }

  getBalance(address) {
    // ' 0xA85f0407Bf7d5Aeb7E776573659e85Af32eD40ed'
    this.bcService.getBalance2(address).subscribe((data: any) => {
      this.balances = [
        {
          assetName: 'Ethereum',
          amount: this.bcService.convertToEth(data)
        }
      ];
    });
  }

  ngOnInit() {
    this.user = this.auth.getAuthenticatedUser();
    this.getBalance(this.user.publicKey);
  }

}
