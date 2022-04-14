//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.7;

contract Simple {
    uint data;

    function updateData(uint _data) external {
        data = _data;
    }

    function getData() external view returns(uint){
        return data;
    }
}