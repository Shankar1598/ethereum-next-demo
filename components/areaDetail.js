









import { Grid, Image,Button,Card ,Menu} from 'semantic-ui-react';

const AreaDetail =  () => (
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

)

export default AreaDetail;













