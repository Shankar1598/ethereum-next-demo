const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());


const compiledVotingSystem = require('../build/votingSystem.json');

let accounts;
let votingSystem;

beforeEach(async ()=>{
    accounts = await web3.eth.getAccounts(); 
    votingSystem = await new web3.eth.Contract(JSON.parse(compiledVotingSystem.interface))
                    .deploy({data:compiledVotingSystem.bytecode})
                    .send({from:accounts[0],gas:'1000000'});

})

describe('votingSystem',()=>{

    it('deploys the votingSystem',()=>{
        assert.ok(votingSystem.options.address);
    });



    it('is voter a manager',async()=>{
        const manager = await votingSystem.methods.manager().call();
        assert.equal(manager,accounts[0]);
    })


        it('registers a candidate',async()=>{
        await  votingSystem.methods.registerCandidates(1,'umk').send({from:accounts[0],gas:'1000000'});
        const candidates = await votingSystem.methods.getCandidates().call();
            assert(candidates[0]);
        })

        it('vote for a candidate',async()=>{
            await votingSystem.methods.voteForCandidate(1234,0).send({from:accounts[0],gas:'1000000'});
            const voters = await votingSystem.methods.getVoters().call();
           console.log(voters);
        })
})
