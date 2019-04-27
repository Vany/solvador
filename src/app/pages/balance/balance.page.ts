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


  constructor() { }

  ngOnInit() {
  }

}
