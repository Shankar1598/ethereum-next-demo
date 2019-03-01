
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
class Stats extends React.Component{

    state={
        stateArray:["Tamil Nadu","Kerla","Gugarat","Rajasthan"],
        pinCodeArray:[600044,600054,600062],
        areaArray:["Chromepet","Tambaram","Egmore"]
    }

    static async getInitialProps()
    {
      const accounts = await web3.eth.getAccounts();
      const  cfi_balance = await wmtSystem.methods.cfi_balance().call();

      return{cfi_balance}
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
          <Card fluid  >
            <Card.Content>
              <Card.Header>Area View</Card.Header>
            </Card.Content>
            <Card.Content extra>
            <Breadcrumb  size='big'>
            <Breadcrumb.Section link style={{color:"black"}}><a href="/stats">India</a></Breadcrumb.Section>
            <Breadcrumb.Divider icon='right chevron' />
            <Breadcrumb.Section link style={{color:"black"}}><a href="/tamil">TamilNadu</a></Breadcrumb.Section>
            <Breadcrumb.Divider icon='right chevron' />
            <Breadcrumb.Section link style={{color:"black"}}><a href="/area">600044</a></Breadcrumb.Section>
            
           
            
          </Breadcrumb>
                
            </Card.Content>
          </Card>
          </div>
        
        
          <div>
          <Grid style={{margin:'0 1%'}}>
            <Grid.Row>
              <Grid.Column  width={8}>

                <div>
        <link
      rel="stylesheet"
      href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
    />
    <Card fluid  >
        
    <Card.Content>
      <Card.Header><h1>States</h1></Card.Header>
      
    </Card.Content>
    <Card.Content extra>
    <Menu secondary vertical style={{fontSize:"1.4em",cursor:"pointer"}}>

           <a href='/area' >  <Menu.Item 
                    name='Chromepet'
                   
                />

               </a>

                         <a href='/area' >  <Menu.Item 
                    name='Tambaram'
                   
                />

               </a>

                         <a href='/area' >  <Menu.Item 
                    name='Madipakam'
                   
                />

               </a>
    </Menu>
    </Card.Content>
    </Card>
    
      
      </div>

              </Grid.Column>
            
        
              <Grid.Column width={8}>
                
              <div>
    <link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
/>
<Card fluid  >
    
<Card.Content>
  <Card.Header><h1>Vendor Details</h1></Card.Header>
  
</Card.Content>
<Card.Content extra>

<Card fluid  >
    
    <Card.Content>
      <Card.Header>Company A</Card.Header>
      
    </Card.Content>
    <Card.Content extra>
   
        
        <Card.Header>Ammount Allocated: 20 Cr</Card.Header>
        <Card.Header style={{marginTop:'1%'}} >Purpose: Flyover construction</Card.Header>
        <Card.Header style={{marginTop:'1%'}} >Data of Allocation: 12.8.2018</Card.Header>
        <Card.Header style={{marginTop:'1%'}} >GST No. 9j84t576852s4h7</Card.Header>

        
    </Card.Content>
    <Card.Content>
      <Card.Header>Company B</Card.Header>
      
    </Card.Content>
    <Card.Content extra>
   
        
        <Card.Header>Ammount Allocated: 150 Cr</Card.Header>
        <Card.Header style={{marginTop:'1%'}} >Purpose: Metro construction</Card.Header>
        <Card.Header style={{marginTop:'1%'}} >Data of Allocation: 04.11.2018</Card.Header>
        <Card.Header style={{marginTop:'1%'}} >GST No.4t576r56642s4h7</Card.Header>

        
    </Card.Content>
    </Card>
</Card.Content>
</Card>

  
  </div>


              </Grid.Column>
            </Grid.Row>
        
         
          </Grid>
          </div>
        
           
          </div>
        )
    }

}

    


const mapStateToProps = ({ HeaderItem }) => ({ HeaderItem });

export default connect(mapStateToProps,Actions)(Stats);