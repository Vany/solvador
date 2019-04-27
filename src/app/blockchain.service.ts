import {EventEmitter, Injectable} from '@angular/core';
import {Blockchain} from './interfaces';
import {Account} from 'web3-eth-accounts'
import {Contract} from 'web3-eth-contract'

import Web3 from 'web3';

@Injectable({
  providedIn: 'root'
})

const contract_abi = [];
const contract_address = "";
const bytecode = "";

export class BlockchainService implements Blockchain {
  private web3: Web3;
  private contract: Contract;
  private account: Account;
  open: EventEmitter<any> = new EventEmitter();

  constructor(privateKey: string) {
    this.web3 = new Web3(new Web3.providers.HttpProvider('http://68.183.156.248:8545'));
    this.account = this.web3.eth.accounts.wallet.add(privateKey);
    this.contract = new this.web3.eth.Contract(contract_abi, contract_address);
  }

  async getBalance(address: string): Promise<number> {
    return Number(this.web3.utils.fromWei((await this.web3.eth.getBalance(address))))
  }

  async fullRecovery(recoveryHashes: string[]): Promise<string> {
    const lastHash=recoveryHashes.pop();
    for (let hash in recoveryHashes) {
      await this.recoveryAccount(hash)
    }
    return (await this.recoveryAccount(lastHash))
  }

  private async recoveryAccount(recoveryHash: string): Promise<any> {
    return (await this.contract.methods.recovery.send(
            this.contract.address,
            recoveryHash,
        ));
  }

  async deployContract(): Promise<boolean> {
    const subj = (await this.contract.deploy({data: bytecode, arguments: []}));
    this.contract = (await subj.send({from: this.account.address}));
    return true;
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
    })
  }
}
