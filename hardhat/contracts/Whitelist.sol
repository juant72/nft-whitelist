//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

contract Whitelist {

    uint8 public maxWhiteListedAddresses;

    mapping(address=>bool) public whiteListedAddresses;

    uint8 public numWhiteListedAddresses;

    constructor(uint8 _maxWhiteListedAddresses){
        maxWhiteListedAddresses=_maxWhiteListedAddresses;
    }

    function addAddressToWhitelist() public {
        require(!whiteListedAddresses[msg.sender] ,"Sender has already whitelisted"  );
        require(numWhiteListedAddresses<maxWhiteListedAddresses, "More address cant be addded, limited reached" );
        whiteListedAddresses[msg.sender] = true;
        numWhiteListedAddresses+=1;
    }
    
}
