const { ADD_MSG } = require('./type');

const initialState = {
  currentUser: {
    userId: Math.floor(Math.random() * 10000000),
    name: ''
  },
  msgs: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MSG:
      return {...state,['msgs']:[...state.msgs,{userId:action.userId,msg:action.text, name: action.name, className:action.className}]}
    default:
      return state
  }
}
