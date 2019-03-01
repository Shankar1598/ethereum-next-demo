pragma solidity^0.4.17;

contract wmt {
    
    address public admin;
    uint public cfi_balance;
    BlockIn[] public chainIn;
    BlockOut[] public chainOut;
    string[] public managers;
    mapping(address=>bool) address_map;
    mapping(string=>bool) tax_head_map;
    
    constructor() public{
        admin = msg.sender;
        address_map[admin]=true;
    }
    
    modifier ownerOnly(){
        require(admin==msg.sender);
        _;
    }
    
    modifier restricted(){
        require(address_map[msg.sender]==true);
        _;
    }
    
    struct BlockIn {
        string id;
        uint amount;
        string tax_type;
        string tax_category;
        string tax_head_code; //Maintain a mapper db to locality tax office
        uint timestamp;
    }
    
    
    struct BlockOut {
        string gstin;
        uint amount;
        uint pincode;
        string locality;
        string area;
        string purpose;
        uint timestamp;
    }
    
    
    
    //check in backend for proper tax type by differnt head office
    function creditTax(string memory id, uint amount,string memory tax_type,string memory tax_category, string memory tax_head_code) public restricted payable  {
        
        cfi_balance += amount;
        BlockIn memory newBlockIn = BlockIn({
            id:id,
            amount:amount,
            tax_type:tax_type,
            tax_category:tax_category,
            tax_head_code:tax_head_code,
            timestamp:block.timestamp
        });
        //Update Chain
        chainIn.push(newBlockIn);
    }
    //Check for disaster management
    function debitTax(string memory gstin, uint amount, uint pincode, string memory locality, string memory area, string memory purpose) public restricted payable{

        cfi_balance -= amount;
        BlockOut memory newBlockOut = BlockOut({
            gstin:gstin,
            amount:amount,
            pincode:pincode,
            locality:locality,
            area:area,
            purpose:purpose,
            timestamp:block.timestamp
        });
        chainOut.push(newBlockOut);
    }
    
    function addManager(address m_address,string memory tax_head_code) public ownerOnly payable{
        address_map[m_address]=true;
        tax_head_map[tax_head_code]=true;
    }
    
    function getChainInLength() public view returns(uint){
        return chainIn.length;
    }
    
    function getChainOutLength() public view returns(uint){
        return chainOut.length;
    }

    
}
