
import { Grid, Image,Button,Card ,Icon,Progress} from 'semantic-ui-react';
import Nav from './nav';
import wmtSystem from '../votingSystem';
import BoxCard from '../components/boxcards';
import web3 from '../web3';
import {connect} from 'react-redux';
import * as  Actions from '../actions/action';
class GridExampleColumns extends React.Component{

    state={sumObj:''}

static async getInitialProps()
{
    const accounts = await web3.eth.getAccounts();
    const  cfi_balance = await wmtSystem.methods.cfi_balance().call();

    //Test Method
    // const debitTax = await wmtSystem.methods.debitAmount('SSD',400,1223,'lo','ar','purp').send({from:accounts[0],gas:'1000000'});
    // const creditTax = await wmtSystem.methods.creditTax("asdadsa","1000000","it","direct").send({from:accounts[0],gas:'1000000'})

    const blockOutLength = await wmtSystem.methods.getChainOutLength().call();

    //GET BLOCKIN LENGTH
    const BlockInLength  = await wmtSystem.methods.getChainInLength().call();
    //GET ALL THE BLOCKOUTS
    const allBlockOuts = await Promise.all(

        Array(parseInt(blockOutLength)).fill().map((element,index)=>{
             return wmtSystem.methods.chainOut(index).call();
        }));

        console.log(allBlockOuts);

        console.log(cfi_balance);

        //GET ALL THE BLOCKINS
        const allBlockIns = await Promise.all(

            Array(parseInt(BlockInLength)).fill().map((element,index)=>{
                 return wmtSystem.methods.chainIn(index).call();
            }));
    
            console.log(allBlockOuts);


            //Get the sumObj
            const sumObj = {
                gst:0,
                it:0,
                ht:0,
                rt:0
            }
            allBlockIns.map((elem)=>{
        
                switch(elem.tax_type){
                    case "gst":
                    sumObj.gst+=parseInt(elem.amount);
                    break;
                    case "it":
                    sumObj.it+=parseInt(elem.amount);
                    break;
                    case "ht":
                    sumObj.ht+=parseInt(elem.amount);
                    break;
                    case "rt":
                    sumObj.rt+=parseInt(elem.amount);
                    break;
                    default:
                    break;
        
                }
               
        
            })

            let currentYearSum = 0
            allBlockOuts.map((elem,i)=>{
                const ts=new Date("1,1,2019").getTime()/1000
                console.log(ts)
                if(elem.timestamp>=ts){
                    currentYearSum+=parseInt(elem.amount);
                    console.log("Sum added",currentYearSum)
                }
            })
            let progress = (parseInt(cfi_balance)/(parseInt(cfi_balance)+parseInt(currentYearSum)))*100

    return{accounts,cfi_balance,allBlockOuts,allBlockIns,sumObj,currentYearSum,progress}
}



render()
{
    return(
        <div style={{marginTop:'6%'}}>
        <link
      rel="stylesheet"
      href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
    />
        <Nav />
      <div style={{margin:'0 2%'}} >
      <Card fluid >
        {console.log(this.props.HeaderItem)}
        <Card.Content>
          <Card.Header>Overview</Card.Header>
          {/* <Card.Description>Daniel is a comedian living in Nashville.</Card.Description> */}
        </Card.Content>
        <Card.Content extra>
        <Progress percent={this.props.progress} warning>
            Consolidated Fund of India
      </Progress>
            
            <Card.Header>CFI Balance: {this.props.cfi_balance}</Card.Header>
            <Card.Header style={{marginTop:'1%'}} >Money Debited This Year: {this.props.currentYearSum}</Card.Header>
            
        </Card.Content>
      </Card>
      </div >
    
        <div style={{display:"flex",flexDirection:"row",marginLeft:"2%"}}>
            <BoxCard sum={this.props.sumObj.gst} title={"GST"} />
        
            <BoxCard sum={this.props.sumObj.it} title={"Income Tax"} />
        </div>


    
      </div>
    )
}

 


}

const mapStateToProps = ({ HeaderItem }) => ({ HeaderItem });

export default connect(mapStateToProps,Actions)(GridExampleColumns);
