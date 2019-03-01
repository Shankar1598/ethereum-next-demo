

import web3 from '../web3';
import wmtSystem from '../votingSystem';

class DebitTax extends React.Component{

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
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous"></link>
                <div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">GSTIN</label>
                        <input onChange={(e)=>{this.setState({
                            id:e.target.value
                        })}} type="text" className="form-control"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Amount</label>
                        <input onChange={(e)=>{this.setState({
                            amount:e.target.value
                        })}} type="text" className="form-control"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Pincode</label>
                        <input onChange={(e)=>{this.setState({
                            pincode:e.target.value
                        })}} type="text" className="form-control"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Locality</label>
                        <input onChange={(e)=>{this.setState({
                            locality:e.target.value
                        })}} type="text" className="form-control"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Area</label>
                        <input onChange={(e)=>{this.setState({
                            area:e.target.value
                        })}} type="text" className="form-control"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Purpose</label>
                        <input onChange={(e)=>{this.setState({
                            purpose:e.target.value
                        })}} type="text" className="form-control"  />
                    </div>
                    <button onClick={async (e)=>{
                        e.preventDefault()
                        const creditTax = await wmtSystem.methods.debitTax(this.state.id,this.state.amount,this.state.pincode,this.state.locality,this.state.area,this.state.purpose).send({from:this.props.account[0],gas:"1000000"});
                    }} type="button" className="btn btn-secondary" >Submit</button>
                </div>
                
            </div>
        );
    }

}

export default DebitTax;