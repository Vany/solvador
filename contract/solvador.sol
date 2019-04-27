pragma solidity ^0.4.25;
contract SolvadorWallet {

    event SomeOneWantsToRecover();

    bytes pubkey;
    mapping(int => bytes) notary;


    constructor(bytes _pk) public {
        pubkey = _pk;
    }
    
    function() external payable { }
    
    function set_notary(bytes _data) public returns (bool) {
        for (int i = 0; i < 3; i++) {
            if (notary[i].length > 0 ) continue;
            notary[i] = _data;
        }
        return false;
    }

    function check()
    internal
    pure
    returns (bool)
  {
      return true;
  }    
}

