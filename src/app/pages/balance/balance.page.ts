import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../services/blockchain/blockchain.service';

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

  private bcService: BlockchainService;

  constructor() {
    this.bcService = new BlockchainService();
  }

  async getBalance() {
    const balance = await this.bcService.getBalance('0xA85f0407Bf7d5Aeb7E776573659e85Af32eD40ed');
    console.log(balance);
  }

  ngOnInit() {
  }

}
