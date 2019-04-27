import { Injectable } from '@angular/core';
import {Blockchain} from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService implements Blockchain {

  constructor() { }

  getBalance(address: string): number {
    return 0;
  }
  recoveryAccount(source: string, destination: string): boolean {
    return false;
  }
  deployContract(address: string): boolean {
    return false;
  }
  transferAssets(destination: string, count: number): boolean {
    return false;
  }
}
