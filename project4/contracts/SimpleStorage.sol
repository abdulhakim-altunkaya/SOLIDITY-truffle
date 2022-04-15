//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.7;

contract SimpleStorage {
    uint data;

    function updateData(uint _data) external {
        data = _data;
    }

    function readData() external view returns(uint){
        return data;
    }
}