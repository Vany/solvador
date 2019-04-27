import { TestBed } from '@angular/core/testing';

import { BlockchainService } from './blockchain.service';

describe('BlockchainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockchainService = TestBed.get(BlockchainService);
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    const service: BlockchainService = TestBed.get(BlockchainService)("0xde0ca9725c74d0792c16e4c90d375625f8c18dc96ace6e416b1f2d946428087e");
    service.getBalance('0xb2ed4cf5b6b2e466fa8df88e937bf66c5d86b83e').then((result)=>{
      expect(result).toBe(100);
    });
  });

  it('should be created', () => {
    const service: BlockchainService = TestBed.get(BlockchainService)("0xde0ca9725c74d0792c16e4c90d375625f8c18dc96ace6e416b1f2d946428087e");
    service.deployContract().then((result)=>{
      console.log(result);
      expect(result).Any();
    });
  });
});
