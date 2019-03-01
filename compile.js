const fs = require('fs-extra');
const path = require('path');
const solc = require('solc');

const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);

const votingSystemPath = path.resolve(__dirname,'contracts','SupplyChain.sol');
const source = fs.readFileSync(votingSystemPath,'utf8');
const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath);

for(let contract in output)
{
    fs.outputJson(
        path.resolve(buildPath,contract.replace(':','')+'.json'),   output[contract]
    );
}
