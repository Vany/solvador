import { TestBed } from '@angular/core/testing';

import { BlockchainService } from './blockchain.service';

describe('BlockchainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockchainService = TestBed.get(BlockchainService);
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    const service: BlockchainService = TestBed.get(BlockchainService);
    service.getBalance('0xb2ed4cf5b6b2e466fa8df88e937bf66c5d86b83e').then((result)=>{
      expect(result).toBe(100);
    });
  });
});
