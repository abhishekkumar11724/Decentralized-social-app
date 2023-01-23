const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "soon matter approve envelope suffer start lamp castle pumpkin offer ball portion";
const infuraProjectId = "7276be06a0bc4320a259cc00cd330448";




module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // for more about customizing your Truffle configuration!
    networks: {
        goerli: {
            provider:()=> new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraProjectId}`),
            network_id:5,
            chain_id:5,
            gas:5500000,
            confirmations:2,
            timeoutBlocks:200,
            skipDryRun:true
        },

        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*", // Match any network id
        },
        develop: {
            port: 8545,
        },
    },
    compilers: {
        solc: {
            version: "^0.8.0",
        },
    },
};
