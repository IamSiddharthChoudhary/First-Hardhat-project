// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract JattData {
    uint256 jigraRating;
    uint256 farmLandInArea;
    uint256 age;

    function retrieve() public view returns (uint256) {
        return (jigraRating);
    }

    function setValue(
        uint256 a,
        uint256 b,
        uint256 c
    ) public payable {
        jigraRating = a;
        farmLandInArea = b;
        age = c;
    }
}
