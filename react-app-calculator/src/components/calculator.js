import React, {useState} from "react";
import {Input, Button} from 'antd';
import { addFunction,subFunction, multiFunction, divFunction } from "../web3_function";

export default function Calculator({account, contractInstance}){
    const [size, setSize] = useState('large');
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    async function calculateRes(operationType){
    let operResult = 0;
    switch(operationType){
        case '+':
            operResult = await addFunction(contractInstance, account, Number(num1),Number(num2));
            setResult(operResult);
            break;
        case '-':
            operResult = await subFunction(contractInstance, account, Number(num1),Number(num2));
            setResult(operResult);
            break;
        case '*':
            operResult = await multiFunction(contractInstance, account, Number(num1),Number(num2));
            setResult(operResult);
            break;
        case '/':
            operResult = await divFunction(contractInstance, account, Number(num1),Number(num2));
            setResult(operResult);
            break;
        default:break;              
    }
}

    return(
        <>
            <h2 style={{textAlign:"center"}}>
                WEB3 Calculator
            </h2>
            <div style={{ height: "400px", width: "300px", border: "2px solid grey", marginLeft: "35%", marginRight: "25%"}}>
                <h5>Number 1:</h5>
                <Input style={{height: "50px"}} placeholder={"Enter First Number !"} onChange={(e)=>setNum1(e.target.value)}/>
                <h5 style={{marginTop: "10px"}}>Number 2:</h5>
                <Input style={{height: "50px"}} placeholder={"Enter Second Number !"} onChange={(e)=>setNum2(e.target.value)}/>
                <h5 style={{marginTop: "10px"}}>Result:</h5>
                <Input style={{height: "50px"}} placeholder={result} />
                <br/> <br/>
                
                <Button type="primary" size={size} style={{marginLeft: "10px"}} onClick={()=>calculateRes("+")}>
                    +
                </Button>

                <Button type="primary" size={size} style={{marginLeft: "20px"}} onClick={()=>calculateRes("-")}>
                    -
                </Button>
                
                <Button type="primary" size={size} style={{marginLeft: "20px"}} onClick={()=>calculateRes("*")}>
                    X
                </Button>

                <Button type="primary" size={size} style={{marginLeft: "20px"}} onClick={()=>calculateRes("/")} >
                    /
                </Button>
            </div>    
        </>
    )
}