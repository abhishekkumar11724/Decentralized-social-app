import './App.css';
import React, {useState, useEffect} from 'react';
import Calculator from './components/calculator';
import { connectWeb3,connectWeb3Metamask} from './web3_function';


function App() {
  const[contractInstance, setContract] = useState(null);
  const [accounts, setAccount] = useState();

  useEffect (()=>{
    async function connect(){
      try {
        let{accounts, instance} =await  connectWeb3Metamask();
        // let {accounts, instance} = await connectWeb3();
        setAccount(accounts);
        setContract(instance);

      }catch(error){
        alert('Failed to load web3, accounts, or contract. check console for details');
        console.log(error);
      }
    }
    connect();
  },[]);

  return (
    <div id='App'>
      <div className='container'>
      { contractInstance == null ? 
        <>
          <h2 style={{textAlign: "center"}}> Trying to connect with web3Provider </h2>
        </> :
        <>
        <Calculator contractInstance={contractInstance} account={accounts[0]}/>
        </>}
      </div>
    </div>
  );
}

export default App;
