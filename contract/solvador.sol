pragma solidity ^0.4.25;
contract SolvadorWallet {

    event SomeOneWantsToRecover();

    address owner;
    mapping(int => bytes) notary;

    constructor() public {
        owner = msg.sender;
    }
    
    function() external payable { }

    function transfer(address whoom, uint amount) public returns (bool) {
        if (msg.sender != owner) return false;
        return whoom.send(amount);
    }    
    
    function set_notary(bytes _data) public returns (bool) {
        for (int i = 0; i < 3; i++) {
            if (notary[i].length > 0 ) continue;
            notary[i] = _data;
            return true;
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

