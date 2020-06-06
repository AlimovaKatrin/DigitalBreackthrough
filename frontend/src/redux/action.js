const { ADD_MSG } = require('./type');

export const addMsgAC = (text,userId) => ({
  type: ADD_MSG,
  userId,
  text
})