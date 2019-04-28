import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain/blockchain.service';
import {NotaryService} from '../../services/notary.service';
import {AuthGuardService, User} from '../../services/auth-guard.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {

  public balances: Array<{ assetName: string; amount: number; }> = [
    {
      assetName: 'Ethereum',
      amount: 100
    },
    {
      assetName: 'KNC',
      amount: 1002
    }
  ];

  user: User;
  constructor(private bcService: BlockchainService, private auth: AuthGuardService) {
    this.user = this.auth.getAuthenticatedUser();
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
    this.getBalance(this.user.publicKey);
  }

}
