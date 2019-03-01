pragma solidity^0.4.17;
pragma experimental ABIEncoderV2;

contract votingSystem{
    
    //Global Variable Declarations
    address public manager;
    mapping(uint=>bool) addressOfVoter;
    Candidate[] public candidatesList;
    Voter[] public votersList;
    
    
    //Candidate Information
    struct Candidate{
        string candidate_name;
        string candidate_party;
        uint noOfVotes;
    }  
    
    //Voter Information
    struct Voter{
        uint voter_id;
    }
    
    
    constructor() public {
        manager = msg.sender;
    }
    
    modifier restricted()
    {
        require(manager == msg.sender);
        _;
    }
    
    function registerCandidates(string memory candidate_name,string memory candidate_party) public 
    {
         Candidate memory newCandidate = Candidate({
         candidate_name:candidate_name,
         candidate_party:candidate_party,
         noOfVotes:0
        });
        
        candidatesList.push(newCandidate);
        
    }
    
    function voteForCandidate(uint  voter_id,uint candidateIndex) public
    {
        require(!addressOfVoter[voter_id]);
        
        Voter memory newVoter = Voter({
            voter_id:voter_id
        });
        votersList.push(newVoter);
        candidatesList[candidateIndex].noOfVotes++;
        addressOfVoter[voter_id] = true;
    }

    function getCandidates() public returns(uint256) {
        return candidatesList.length;
    }
    
}

