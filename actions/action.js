
export const addVoterId = (id) => dispatch => {
  return dispatch({ type:'ADD_VOTER_ID',payload:id })
}


export const addAccounts = (Accounts) => dispatch => {
  return dispatch({ type: 'ADD_ACCOUNTS',payload:Accounts })
}



export const addHeaders = (item_name) => dispatch => {
  return dispatch({ type: 'ADD_HEADER_ITEM',payload:item_name })
}