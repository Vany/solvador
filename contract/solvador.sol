pragma solidity ^0.4.25;
contract SolvadorWallet {

    modifier onlyOwner {
         require(msg.sender == owner, "Unauthorised");
        _;
    }
    
    event Recovered();
    event ValidSignature();
    

    address owner;
    mapping(int => bytes) signs; // notary signs
    int notarys;
    int restored; //amout of checked notary signs

    constructor() public {
        owner = msg.sender;
        restored = 0;
    }
    
    function() external payable { }

    function transfer(address whoom, uint amount) onlyOwner public payable returns (bool) {
        return whoom.send(amount);
    }    
    
    function set_notary(bytes _hash) onlyOwner public returns (bool) {
        for (int i = 0; i < 3; i++) {
            if (signs[i].length > 0 ) continue;
            signs[i] = _hash;
            notarys++;
            return true;
        }
        return false;
    }

    function signcheck(bytes32 _passportHash, bytes _signature, address _pubk) private pure returns(bool) {
        bytes32 r;
        bytes32 s;
        uint8 v;
        
        if (_signature.length != 65) return false;
        assembly {
            r := mload(add(_signature, 0x20))
            s := mload(add(_signature, 0x40))
            v := byte(0, mload(add(_signature, 0x60)))
        }
        if (v < 27) v += 27;
        if (v != 27 && v != 28) return false;
        address signed = ecrecover(_passportHash, v, r, s);
        return signed == _pubk;
    }

    function restore(bytes32 _passportHash, address _notary) public payable returns (bool) {
        bytes storage cur = signs[restored];
        bool valid =signcheck(_passportHash, cur, _notary);
        if (valid) emit ValidSignature();
        restored++;
        if (notarys <= restored ) {
            owner = msg.sender;
            emit Recovered();
        }
        return true;
    }
    
    
    function finita_la_comedia() onlyOwner public {
        selfdestruct(owner);
    }
}
