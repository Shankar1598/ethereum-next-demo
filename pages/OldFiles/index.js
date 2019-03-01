



import { Grid, Image,Button } from 'semantic-ui-react';
import Nav from './nav';

const GridExampleColumns = () => (
  <div>
    <link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
/>
    <Nav />
    <div style={{marginTop:"7%"}} >

        <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
     
       <div style={{marginTop:'10%',marginLeft:'15%'}} >
        <h1 style={{fontSize:'32px'}} >WHERE IS MY TAX</h1>
         <p style={{fontSize:'17px',fontWeight:'300'}}  >

         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
         </p>
         <div style={{marginTop:'2',display:'flex',justifyContent:'center',marginTop:'15%'}} ><a href="/dashboard"><Button style={{width:'100%',height:'61px',background:'#322f85',borderRadius:'0',fontSize:'18px'}} primary>Show Stats</Button></a></div>
       </div>

      </Grid.Column>

      <Grid.Column style={{width:'52%',display:'flex',justifyContent:'center'}} width={8}>
      <Image  src={require('../images/tax.png')} />
      
     
      </Grid.Column>
    </Grid.Row>

 
  </Grid>


  </div>
  </div>

)

export default GridExampleColumns
