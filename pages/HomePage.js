import React, { Component } from 'react'
import kyd from '../votingSystem';
import web3 from '../web3';


export default class HomePage extends Component {
    static async getInitialProps(){
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
    }
    render(){
        return(<div>
            "Hello"
        </div>);
    }
}