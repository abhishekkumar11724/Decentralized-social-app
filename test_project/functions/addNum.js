const {createContractInstance} = require("./connection" );
async function addition(nums1, nums2){
    const {instance, accounts} =await createContractInstance();
    // const response = await instance.methods.addNum(nums1,nums2).send({from:accounts[0]});
    //.send = return transaction receipt
    //.call = return the result of the method that is called upon 
    const response2 = await instance.methods.addNum(nums1,nums2).call({from:accounts[0]});
    
    console.log("response : ", response2);
}

addition(1,2);

module.exports = {addition};