// to write connection for web3

let Web3 = require('web3');
const providers = new Web3.providers.HttpProvider('http://localhost:8545');
let web3 = new Web3 (providers);

const calculator = require("../build/contracts/calculator.json");

async function connection(){
    accounts = await web3.eth.getAccounts();
    console.log("accounts : ", accounts);
}

//function to create contract instance
async function createContractInstance(){
    let accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const {address} = calculator.networks[networkId];

    let instance = await new web3.eth.Contract(calculator.abi,address);
    console.log('address: ', address);
    // console.log(instance.methods);
    return  {accounts, instance};

}

// createContractInstance();
module.exports = {createContractInstance};