import Web3 from "web3";
import CalculatorContract from "./contract/Calculator.json";

async function connectWeb3() {
    const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545/");
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = await CalculatorContract.networks[networkId];
    const instance = new web3.eth.Contract(CalculatorContract.abi,deployedNetwork.address);
    return {accounts,instance};
}

async function connectWeb3Metamask() {
    const web3 = new Web3(Web3.givenProvider|| "http://127.0.0.1:7545");
    await window.ethereum.enable();
    console.log("web3 : ", web3);
    const accounts = await web3.eth.requestAccounts();
    console.log("accounts : ", accounts);
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = await CalculatorContract.networks[networkId];
    const instance = new web3.eth.Contract(CalculatorContract.abi,deployedNetwork.address);
    return {accounts,instance};
}

async function addFunction(ContractInstance, account, num1, num2){
    let res2 = await ContractInstance.methods.addNum(Number(num1),Number(num2)).send({from:account})
    // .on('transactionHash', function(transactionHash){ console.log("transcationHash: " ,transactionHash) })
    // .on('receipt', function(receipt){
    //    console.log("receipt: ", receipt) 
    // })
    // .on('confirmation', function(confirmationNumber, receipt){
    //     console.log("confirmationNumber: ", confirmationNumber);
    //     console.log("receipt: ", receipt);
    // });
    .then(receipt=>{console.log("receipt: ",receipt);});
    console.log('res: ', res2);
    return res2;
}

async function subFunction(contractInstance, account, num1, num2) {
    if(num1>num2){
        let res2 = await contractInstance.methods.subNum(Number(num1),Number(num2)).send({from:account});
        console.log('res: ',res2);
        return res2;
    }
    else {
        let res2 = await contractInstance.methods.SubNum(Number(num2),Number(num1)).send({from:account});
        console.log('res: ', res2);
        return res2;
    }
}

async function multiFunction(ContractInstance, account, num1, num2){
    let res2 = await ContractInstance.methods.multiNum(Number(num1),Number(num2)).send({from:account});
    console.log('res: ', res2);
    return res2;
}

async function divFunction(ContractInstance, account, num1, num2){
    let res2 = await ContractInstance.methods.divNum(Number(num1),Number(num2)).send({from:account});
    console.log('res: ', res2);
    return res2;
}

export {connectWeb3,connectWeb3Metamask, addFunction, subFunction, multiFunction, divFunction}