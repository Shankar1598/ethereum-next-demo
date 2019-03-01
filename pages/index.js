import React from 'react'
import {
    Link
} from '../routes';
import kyd from '../votingSystem';
import web3 from '../web3';


class Index extends React.Component {

    static async getInitialProps() {
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);


        //const creditTax = await kyd.methods.creditTax(this.state.id,this.state.amount,this.state.type,this.state.category,this.state.tax_head_code).send({from:accounts[0],gas:"1000000"});

        return {
            accounts
        }
    }


    render() {
        return (

            <div > 
            {/* <h1>index route</h1> */} 
            <Link route = "/HomePage" > Hi </Link> 
            < /div >
        )
    }

}

export default Index;