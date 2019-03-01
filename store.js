import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  voter_id:'123',
  Accounts:'',
  StateArray:[],
  PinArray:[],
  AreaArray:[],
  HeaderItem:[]
}

export const actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK',
  GET_VOTER_ID:'GET_VOTER_ID',
  ADD_VOTER_ID:'ADD_VOTER_ID',
  ADD_ACCOUNTS:'ADD_ACCOUNTS',
  ADD_HEADER_ITEM:'ADD_HEADER_ITEM'
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {

  console.log(action)
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      })

      case actionTypes.ADD_VOTER_ID:
      return Object.assign({}, state, {
        voter_id:action.payload
      })

      case actionTypes.ADD_ACCOUNTS:
      return Object.assign({}, state, {
        Accounts:action.payload
      })

      case actionTypes.ADD_HEADER_ITEM:
      return{...state,HeaderItem:action.payload}

    default:
      return state
  }
}

// ACTIONS
export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const getVoterId  = dispatch =>{
    return dispatch({type:actionTypes.GET_VOTER_ID,payload:data})
}

export const startClock = () => dispatch => {
  return setInterval(
    () => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }),
    1000
  )
}

export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD })
}

export const addVoterId = (id) => dispatch => {
    return dispatch({ type: actionTypes.ADD_VOTER_ID,payload:id })
  }

  export const addAccounts = (Accounts) => dispatch => {
    return dispatch({ type: actionTypes.ADD_ACCOUNTS,payload:Accounts })
  }

  export const addHeaders = (item_name) => dispatch => {
    return dispatch({ type: 'ADD_HEADER_ITEM',payload:item_name })
  }


export const initStore = (initialState = exampleInitialState) => {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  )
}