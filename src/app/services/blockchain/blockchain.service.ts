import { EventEmitter, Injectable } from '@angular/core';
import { Blockchain } from './interfaces';
import { Account } from 'web3-eth-accounts';
import { Contract } from 'web3-eth-contract';
import Web3 from 'web3';
import * as contract_json from '../../contract/SolvadorWallet.json';
import {bindNodeCallback, Observable} from 'rxjs';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
// const fs = require('fs');

// tslint:disable-next-line:variable-name
const contract_abi_path = './solvador_abi.json';

// tslint:disable-next-line:variable-name
const contract_abi = contract_json.abi;
// tslint:disable-next-line:variable-name
const contract_address = '';
const bytecode = contract_json.bytecode;

export class BlockchainService implements Blockchain {
  private web3: Web3;
  private contract: Contract;
  private account: Account;
  open: EventEmitter<any> = new EventEmitter();

  // constructor(privateKey: string)
  constructor() {
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/165e981477d146ecb702fce1ffbef166'));
    // A06EE48D9F0E637636B24925C964572BCDB8991E4B2EF357A79E9BD2292CFA7B
    // this.account = this.web3.eth.accounts.wallet.add(privateKey);
    // this.contract = new this.web3.eth.Contract(contract_abi, contract_address);
  }

  public getBalance2(address: string): Observable<number[]> {
    console.log('get balance2');
    const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/165e981477d146ecb702fce1ffbef166'));

    return bindNodeCallback(web3.eth.getBalance)(address);
  }

  // 0xA85f0407Bf7d5Aeb7E776573659e85Af32eD40ed for testing
  async getBalance(address: string): Promise<number> {
    console.log('get balance');
    const web3 = new Web3(new Web3.providers.HttpProvider('http://ropsten.infura.io/v3/165e981477d146ecb702fce1ffbef166'));
    return Number(web3.utils.fromWei((await web3.eth.getBalance(address))));
  }

  async fullRecovery(recoveryHashes: string[]): Promise<string> {
    const lastHash = recoveryHashes.pop();
    recoveryHashes.forEach(async (hash) => {
      await this.recoveryAccount(hash);
    });
    return (await this.recoveryAccount(lastHash));
  }

  private async recoveryAccount(recoveryHash: string): Promise<any> {
    return (await this.contract.methods.recovery.send(
      this.contract.address,
      recoveryHash,
    ));
  }

  async deployContract(): Promise<string> {
    //не сходятся типы
    let contract=new this.web3.eth.Contract(contract_abi);
    const subj = (await contract.deploy({data: bytecode, arguments: []}));
    this.contract = (await subj.send({from: this.account.address}));
    return this.contract.address;
  }

  async transferAssets(to: string, amount: number): Promise<boolean> {
    const result = (await this.contract.methods.transfer.send(to, amount));
    console.log(result);
    return true;
  }

  private subscribe() {
    this.web3.eth.subscribe('logs', {
      address: this.contract.address,
      topics: []
    });
  }
}
