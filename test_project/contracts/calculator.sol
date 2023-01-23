// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Calculator {

    uint public result;
    event success(string msg);
    function addNum(uint  nums1,uint nums2) public pure returns(uint){
        return nums1+nums2;
    }
    function subNum(uint nums1,uint nums2) public pure returns(uint){
        return nums1-nums2;
    }
    function multiNum(uint nums1, uint nums2) public returns(uint){
        return nums1*nums2;
        emit success("multiplication success!");
    }
    function divNum(uint nums1, uint nums2) public pure returns(uint){
        require(nums2>0, "divisor cannot be zero or negitive");
        require(nums1>nums2, "divident must be greater than divisor");
        return nums1/nums2;
    }

}