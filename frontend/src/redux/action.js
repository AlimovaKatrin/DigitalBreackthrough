const { ADD_MSG } = require('./type');

export const addMsgAC = (text,userId,name, className) => ({
  type: ADD_MSG,
  userId,
  text,
  name, 
  className
})
