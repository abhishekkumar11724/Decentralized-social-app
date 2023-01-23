const { createContractInstance} = require("./connection");

async function subNum (nums1, nums2) {
    const {accounts, instance} = await createContractInstance();
    const response = await instance.methods.subNum(nums1,nums2).call({from: accounts[0]});

    console.log("response : ", response);
}

subNum(10,3);
module.exports = {subNum};