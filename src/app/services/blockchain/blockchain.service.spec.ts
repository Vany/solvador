import { TestBed } from '@angular/core/testing';

import { BlockchainService } from './blockchain.service';

describe('BlockchainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockchainService = TestBed.get(BlockchainService);
    expect(service).toBeTruthy();
  });

  it('should get balance', () => {
    const service: BlockchainService = TestBed.get(BlockchainService);
    service.getBalance2('0xb2ed4cf5b6b2e466fa8df88e937bf66c5d86b83e').subscribe((data: any) => {
      this.balance = data;
      expect(data).toBe(100);
      console.log('Balance: ', data);
    });
  });

});
