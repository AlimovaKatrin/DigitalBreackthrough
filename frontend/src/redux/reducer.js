const { ADD_MSG } = require('./type');

const initialState = {
  currentUser: {
    userId: Math.floor(Math.random() * 10000000),
    name: 'Katrin'
  },
  msgs: [{ userId: '1111', msg: 'Hi' }, { userId: '2222', msg: 'Hola' }, { userId: '1111', msg: 'Wazz UP' }]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MSG:
      return {...state,['msgs']:[...state.msgs,{userId:action.userId,msg:action.text}]}
    default:
      return state
  }
}