
import { Grid, Image,Button,Card ,Icon,Progress,Breadcrumb, Menu} from 'semantic-ui-react';
import Nav from './nav';
import BoxCard from '../components/boxcards';
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
            <Breadcrumb.Section link style={{color:"black"}}>India</Breadcrumb.Section>
            <Breadcrumb.Divider icon='right chevron' />
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

           <a href='/tamil' >  <Menu.Item 
                    name='Tamil Nadu'
                   
                />

               </a>

                         <a href='/tamil' >  <Menu.Item 
                    name='Delhi'
                   
                />

               </a>

                         <a href='/tamil' >  <Menu.Item 
                    name='Gujarat'
                   
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
  <Card.Header><h1>State Details</h1></Card.Header>
  
</Card.Content>
<Card.Content extra>

<Card fluid  >
    
    <Card.Content>
      <Card.Header>2019</Card.Header>
      
    </Card.Content>
    <Card.Content extra>
   
        
        <Card.Header>CFI Balance:</Card.Header>
        <Card.Header style={{marginTop:'1%'}} >Money Collected From TN:</Card.Header>
        <Card.Header style={{marginTop:'1%'}} >GST:</Card.Header>
        <Card.Header style={{marginTop:'1%'}} >Income Tax:</Card.Header>

        
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



