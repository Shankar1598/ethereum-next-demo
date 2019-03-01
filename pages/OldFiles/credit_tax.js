

import web3 from '../web3';
import wmtSystem from '../votingSystem';

class CreditTax extends React.Component{

    state={
        address:0,
        tax_head_code:0,
        account:[]
    }

    static async getInitialProps(){
        const account = await web3.eth.getAccounts();
        return {account}
    }

    // componentDidMount(){
    //     this.setState({...this.state, account: this.getInitialProps()})
    // }

    render(){
        return(
            <div style={{margin:"3%"}}>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous"></link>
                <div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">ID</label>
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
                        <label htmlFor="formGroupExampleInput2">Type</label>
                        <input onChange={(e)=>{this.setState({
                            type:e.target.value
                        })}} type="text" className="form-control"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Category</label>
                        <input onChange={(e)=>{this.setState({
                            category:e.target.value
                        })}} type="text" className="form-control"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Tax Head Code</label>
                        <input onChange={(e)=>{this.setState({
                            tax_head_code:e.target.value
                        })}} type="text" className="form-control"  />
                    </div>
                    <button onClick={async (e)=>{
                        e.preventDefault()
                        const creditTax = await wmtSystem.methods.creditTax(this.state.id,this.state.amount,this.state.type,this.state.category,this.state.tax_head_code).send({from:this.props.account[0],gas:"1000000"});
                        alert('Credit is being added');
                    }} type="button" className="btn btn-secondary" >Submit</button>
                </div>
                
            </div>
        );
    }

}

export default CreditTax;