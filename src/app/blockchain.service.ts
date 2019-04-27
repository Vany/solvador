import {EventEmitter, Injectable} from '@angular/core';
import {Blockchain} from './interfaces';
import {Account} from 'web3-eth-accounts'
import {Contract} from 'web3-eth-contract'
import {AbiType} from 'web3-utils'
const solc = require('solc');
const fs = require('fs');
import * as _contract_abi  from './contract/salvador.json';
// import * as _bytecode from './contract/solvador.json';
// let bytecode="0x"+JSON.stringify(_bytecode.object);
// let contract_abi=JSON.parse(_contract_abi);
let contract_abi=_contract_abi;

import Web3 from 'web3';
import {json} from "@angular-devkit/core";

const input = fs.readFileSync('./contract/solvador.sol');
const output = solc.compile(input.toString(), 1);
const bytecode = output.contracts['Token'].bytecode;
const abi = JSON.parse(output.contracts['Token'].interface);

// Contract object

// @Injectable({
//   providedIn: 'root'
// })

const contract_address = "";

export class BlockchainService implements Blockchain {
  private web3: Web3;
  private contract: Contract;
  private account: Account;
  open: EventEmitter<any> = new EventEmitter();

  constructor(privateKey: string) {
    this.web3 = new Web3(new Web3.providers.HttpProvider('http://68.183.156.248:8545'));
    this.account = this.web3.eth.accounts.wallet.add(privateKey);
    // this.contract = new this.web3.eth.Contract(contract_abi, contract_address);
  }

  async findContract(): Promise<boolean>{
    this.contract=new this.web3.eth.Contract(contract_abi, contract_address);
    return true;
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

  async deployContract(): Promise<string> {
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
    })
  }
}
