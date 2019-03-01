const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const HDwalletProvider = require('truffle-hdwallet-provider');


const provider = new HDwalletProvider(
   'eyebrow nasty cushion nerve immense crater rhythm sadness lecture prison shoot picture',
    'http://127.0.0.1:7545'
)

const web3 = new Web3(provider);

const compiledWtm = require('./build/knowYourDrug.json');

const deploy = async()=>{
    const accounts = await web3.eth.getAccounts();
    const wtmSystem = await new web3.eth.Contract(JSON.parse(compiledWtm.interface))
                    .deploy({data:'0x'+compiledWtm.bytecode})
                    .send({from:accounts[0],gas:'6721975'});
    
   console.log(wtmSystem.options.address);
     

}

deploy();
