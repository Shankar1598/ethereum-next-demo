pragma solidity ^0.4.17;

contract knowYourDrug
{
    address public Manager;
    uint32 public currentAccessor;
    uint32 public currentDrugAccessed;
    bool public exception;
    bool public drugException;
    constructor() public {
        Manager=msg.sender;
    }
    struct partOfSupplyChain
    {
        string corresName;
        string designationInChain;
        uint32 recogId;
        bool isManufacturer;
    }
    mapping (uint => bool) accounts;
    partOfSupplyChain[] public supplyChainParts;
    
    function updateSupplyChainDetails(string memory _name,string memory _designation, uint32 _id,bool _ismanufacturer) public
    {
        require(msg.sender==Manager);
        supplyChainParts.push(partOfSupplyChain({
            corresName: _name,
            designationInChain: _designation,
            recogId: _id,
            isManufacturer: _ismanufacturer
        }));
        accounts[_id]=true;
    }
    
    function getSupplyChainDetails (uint supplyChainPartIndex) public view returns (string memory _name, string memory _designation, uint32 _id,bool _ismanufacturer)
    {
        return(supplyChainParts[supplyChainPartIndex].corresName,supplyChainParts[supplyChainPartIndex].designationInChain,supplyChainParts[supplyChainPartIndex].recogId,supplyChainParts[supplyChainPartIndex].isManufacturer);
    }
    
    function toSignIn(uint32 _id) public 
    {
        
        if(accounts[_id]==true){
            currentAccessor = _id;
        }
    }
    function toViewAccessor(uint32 _currentAccessor) public view returns (string memory corresName,string memory designationInChain,uint32 recogId,bool isManufacturer)
    {
        return(supplyChainParts[_currentAccessor].corresName,supplyChainParts[currentAccessor].designationInChain,supplyChainParts[currentAccessor].recogId,supplyChainParts[currentAccessor].isManufacturer);
        
    }
    struct DrugDetails
    {
        string drugName;
        string manufacturedBy;
        string drugId;
        uint32 serialNumberFrom;
        uint32 serialNumberTo;
        uint32[] pathOfDrug;
        string manufactureDate;
        string expiryDate;
    }
    DrugDetails[] public drugsInNetwork;
   
    
    
    
    function manufacturerUpdateDrugs(string memory _drugName,string memory _drugId, uint32 _serialNumberFrom,uint32 _serialNumberTo,string memory _manufactureDate,string memory _expiryDate) public
    {
        uint32[] memory tempPath;
        tempPath[0] = supplyChainParts[currentAccessor].recogId;
        require(supplyChainParts[currentAccessor].isManufacturer==true);
        drugsInNetwork.push(DrugDetails({
            drugName: _drugName,
            manufacturedBy: supplyChainParts[currentAccessor].corresName,
            drugId: _drugId,
            serialNumberFrom: _serialNumberFrom,
            serialNumberTo: _serialNumberTo,
            pathOfDrug:tempPath,
            
           // pathOfDrug[pathTraceIndex]:supplyChainParts[currentAccessor].recogId,//
            manufactureDate: _manufactureDate,
            expiryDate: _expiryDate
            

            
            
        }));
        
    }
    
    struct NotAManufacturer
    {
        uint32 recogId;
        string drugId;
        uint32 havingSerialNumberFrom;
        uint32 havingSerialNumberTo;
        string checkInDate;
        string checkOutDate;
    }
    NotAManufacturer[] public notAManufacturer;
    
    function non_ManufacturerUpdateDrugs(string memory _drugId,uint32 _serialNumberFrom,uint32 _serialNumberTo, string memory _checkInDate, string memory _checkOutDate) public
    {
        require(supplyChainParts[currentAccessor].isManufacturer==false);
        for(uint32 index=0;index<drugsInNetwork.length;index++)
        {
            string memory t = drugsInNetwork[index].drugId;
            if(keccak256(bytes(t))==keccak256(bytes(_drugId)))
            {
                currentDrugAccessed=index;
                break;
            }
            else
            {
                drugException=true;
            }
        }
        if(drugException==false){
            uint32[] memory tempPath;
            tempPath[0] = supplyChainParts[currentAccessor].recogId;
            
            notAManufacturer.push(NotAManufacturer({
                recogId:currentAccessor,
                drugId:_drugId,
                havingSerialNumberFrom:_serialNumberFrom,
                havingSerialNumberTo:_serialNumberTo,
                checkInDate:_checkInDate,
                checkOutDate:_checkOutDate
            //have to include his recogId in the pathOfDrug of the drug
            }));
            
            drugsInNetwork[currentDrugAccessed].pathOfDrug = tempPath;
        }
        
        
    }
    
    function trackDrug() public view returns(uint)
    {
        return drugsInNetwork.length;
    }
    
}