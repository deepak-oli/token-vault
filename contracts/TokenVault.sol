// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "./Token.sol";

contract TokenVault {
    event TokenCreated(address tokenAddress);
    function createToken(
        string memory _name,
        string memory _symbol,
        uint256 _initialSupply
    ) public {
        Token token = new Token(msg.sender, _name, _symbol, _initialSupply);
        emit TokenCreated(address(token));
    }
}
