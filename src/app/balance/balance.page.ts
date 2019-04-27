import { Component, OnInit } from '@angular/core';

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
      amount: '0.052901833'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
