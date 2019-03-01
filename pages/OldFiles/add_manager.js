
import { Grid, Image,Button,Card ,Icon,Progress,Breadcrumb, Menu} from 'semantic-ui-react';
import Nav from './nav';
import BoxCard from '../components/boxcards';
import web3 from '../web3';
import wmtSystem from '../votingSystem';
import AreaList from '../components/areaList';
import AreaDetail from '../components/areaDetail';
import * as Actions from '../actions/action';
import {connect} from 'react-redux';
import {Router,Link} from '../routes'; 
class AddManager extends React.Component{

    state={
        address:0,
        tax_head_code:0
    }

    static async getInitialProps(){
        const account = await web3.eth.getAccounts();
        return {account}
    }

    render(){
        return(
            <div style={{margin:"3%"}}>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous"></link>
                <div>
                    <div class="form-group">
                        <label for="formGroupExampleInput">M-Address</label>
                        <input onChange={(e)=>{this.setState({
                            address:e.target.value
                        })}} type="text" class="form-control" id="formGroupExampleInput" placeholder="M_Address"  />
                    </div>
                    <div class="form-group">
                        <label for="formGroupExampleInput2">Tax-Head-Code</label>
                        <input onChange={(e)=>{this.setState({
                            tax_head_code:e.target.value
                        })}} type="text" class="form-control" id="formGroupExampleInput2" placeholder="Tax_head_Code" />
                    </div>
                    <button onClick={async (e)=>{
                        e.preventDefault()
                        const addManager = await wmtSystem.methods.addManager(this.state.address,this.state.tax_head_code).send({from:this.props.account[0],gas:"1000000"});
                    }} type="button" class="btn btn-secondary" >Submit</button>
                </div>
                
            </div>
        );
    }

}

export default AddManager;