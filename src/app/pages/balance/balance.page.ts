import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain/blockchain.service';
import {NotaryService} from '../../services/notary.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {

  public balances: Array<{ assetName: string; amount: string; }> = [
    {
      assetName: 'Ethereum',
      amount: '100'
    },
    {
      assetName: 'KNC',
      amount: '1002'
    }
  ];

  balance: number;

  constructor(private bcService: BlockchainService) {
  }

  getBalance() {
    this.bcService.getBalance2('0xA85f0407Bf7d5Aeb7E776573659e85Af32eD40ed').subscribe((data: any) => {
      this.balance = data;
      console.log('Balance: ', data);
    });
  }

  ngOnInit() {
  }

}
