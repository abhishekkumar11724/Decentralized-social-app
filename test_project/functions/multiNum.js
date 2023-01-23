const {createContractInstance }= require("./connection");
async function multiNum (nums1, nums2){
    const {accounts, instance} =await createContractInstance();
    const response = await instance.methods.multiNum(nums1, nums2).call({from:accounts[0]});
    console.log(response);
}

multiNum(1,2);
module.exports = {multiNum};