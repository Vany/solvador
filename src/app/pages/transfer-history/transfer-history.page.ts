import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain/blockchain.service';
import {AuthGuardService, User} from '../../services/auth-guard.service';
import { userInfo } from 'os';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.page.html',
  styleUrls: ['./transfer-history.page.scss'],
})
export class TransferHistoryPage implements OnInit {


  public txs: Array<{ txHash: string; to: string, block: string, amount: string}> = [
    {
      txHash: '0x6c8a34dbdd31da5e4d5a59b3a94d1665964a452e167984ca41f6db9fdc87099e',
      to: '0x240943d75dd94a28ff7a63f0b4ea71892af87970',
      block: '7650868',
      amount: '0.052901833'
    },
    {
      txHash: '0x6c8a34dbdd31da5e4d5a59b3a94d1665964a452e167984ca41f6db9fdc87099e',
      to: '0x240943d75dd94a28ff7a63f0b4ea71892af87970',
      block: '7650868',
      amount: '100'
    }
  ];

  user: User;
  constructor(private auth: AuthGuardService, private route: Router) {
    this.user = this.auth.getAuthenticatedUser();
   }

  ngOnInit() {
    const url = 'https://ropsten.etherscan.io/address/' + this.user.wallet;
    window.location.href = url;
  }

}
