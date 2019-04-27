pragma solidity ^0.4.25;
contract SolvadorWallet {

    event SomeOneWantsToRecover();

    bytes pubkey; 

    constructor(bytes _pk) public {
        pubkey = _pk;
    }
    
    function() external payable { }
    

    function check()
    internal
    pure
    returns (bool)
  {
      return true;
  }    
}
