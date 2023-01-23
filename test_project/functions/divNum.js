const {createContractInstance }= require("./connection");
async function divNum (nums1, nums2){
    const {accounts, instance} = await createContractInstance();
    // console.log(instance);
    const response = await instance.methods.divNum(nums1, nums2).call({from:accounts[0]});
    console.log(response);
}

divNum(8,2);
module.exports = {divNum};