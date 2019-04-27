pragma solidity ^0.4.25;
contract SolvadorWallet {

    event SomeOneWantsToRecover();

    address owner;
    mapping(int => bytes) signs;
    int restored;

    constructor() public {
        owner = msg.sender;
        restored = 0;
    }
    
    function() external payable { }

    function transfer(address whoom, uint amount) public returns (bool) {
        if (msg.sender != owner) return false;
        return whoom.send(amount);
    }    
    
    function set_notary(bytes _sign) public returns (bool) {
        if (msg.sender != owner) return false;
        for (int i = 0; i < 3; i++) {
            if (signs[i].length > 0 ) continue;
            signs[i] = _sign;
            return true;
        }
        return false;
    }

    function signcheck(bytes sign) private returns(bool) {
        bytes32 r;
        bytes32 s;
        uint8 v;
        
        if (sign.length != 65) {
          return false;
        }
    }

    function restore(bytes _sign, address _notary) public returns (bool) {
        
    }
    
    
    function finita_la_comedia() {
        if (msg.sender != owner) return;
        selfdestruct(owner);
    }
}
