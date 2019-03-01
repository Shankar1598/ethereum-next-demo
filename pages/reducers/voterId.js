export default function(state=null,action)
{

   
    const GET_VOTER_ID = "GET_VOTER_ID";
    const ADD_VOTER_ID = "ADD_VOTER_ID";
  
    
    // const ADD_PROJECT = "ADD_PROJECT";

switch(action.type)
{

case GET_VOTER_ID:
return action.payload

case ADD_VOTER_ID:
return action.payload

default:
return state;

}

} 