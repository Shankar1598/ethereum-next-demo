pragma solidity^0.5;

contract Campaign {
    
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
    }
    
    Request[] public requests;
    address public manager;
    uint public  minimumContributionAmount;
    address[] public approvers;
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
        
    constructor(uint minimum) public {
        manager = msg.sender;
        minimumContributionAmount = minimum;
        
    }
    
    
    function contribute() public payable {
        require(msg.value>minimumContributionAmount);
        approvers.push(msg.sender);
        
    }
    
    function  createRequest(string memory description,uint value,address recipient) public   restricted {
        Request memory newRequest = Request({
            description:description,
            value:value,
            recipient:recipient,
            complete:false
        });
        
        request.push(newRequest);
    }
        

    
    
}