import web3 from './web3';
export default async()=>{

    const Accounts = await web3.eth.getAccounts();
    return Accounts;
}