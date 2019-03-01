




import { Grid, Image,Button,Card ,Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {addHeaders} from '../actions/action';

class AreaList2 extends React.Component{


    handleItemClick(e)
    {
        console.log( e.currentTarget.innerHTML );
        this.props.addHeaders(e.currentTarget.innerHTML);

    }

render()
{
    return(
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
            <Menu.Item 
              name='600044'
            //   active={activeItem === 'account'}
            
            />
            <Menu.Item 
              name='600062'
            //   active={activeItem === 'settings'}
             
            />
            <Menu.Item 
              name='600020'
            //   active={activeItem === 'settings'}
              
            />
            <Menu.Item 
              name='600002'
              
            //   active={activeItem === 'settings'}
             
            />
     
          </Menu>
    </Card.Content>
    </Card>
    
      
      </div>
    )
}


}
 

const mapStateToProps = ({ HeaderItem }) => ({ HeaderItem });

export default connect(mapStateToProps,{addHeaders})(AreaList2);


