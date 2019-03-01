
import { Grid, Image,Button,Card ,Icon,Progress} from 'semantic-ui-react';


class BoxCards extends React.Component{

render()
{
    return(
        <div style={{marginTop:'1%'}}>
        <link
      rel="stylesheet"
      href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
    />
       
      <div style={{margin:'0 2%'}} >
      <Card>
        
        <Card.Content>
          <Card.Header>{this.props.title}</Card.Header>
        </Card.Content>
        <Card.Content extra>
        <Progress percent={100} color={'blue'}>
            Consolidated Fund of India
      </Progress>
            
            <Card.Header>Contribution : {this.props.sum}</Card.Header> 
            <div style={{marginTop:'8%'}} >
            <Button style={{borderRadius:'0'}} >View Stats</Button>
            </div>
        </Card.Content>
      </Card>
      </div>
      </div>
    )
}

}

export default BoxCards;
