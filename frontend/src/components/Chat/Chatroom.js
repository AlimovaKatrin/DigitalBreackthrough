import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addMsgAC } from '../../redux/action';

import io from 'socket.io-client';

function Chatroom() {
  const socket = io.connect('http://localhost:5000/chat');

  const state = useSelector(state => state);
  const dispatch = useDispatch();
  
  const [textValue, setText] = useState('');
  const [currentUser, setCurrent] = useState(state.currentUser);
  const [msg, setValue] = useState('');
  
  useEffect(() => {

    socket.on('chat message', (msg) => {
      if (currentUser.userId !== msg.userId) {
        dispatch(addMsgAC(msg.textValue, msg.userId))
      }
      console.log(state);
      setValue(msg.textValue)
    });
  }, []);


  const sendMsg = () => {
    console.log('отправляю');

    const currentMsg = { textValue, userId: currentUser.userId }
    dispatch(addMsgAC(textValue, currentUser.userId))

    socket.emit('chat message', currentMsg)
  }

  return (
    <div>
      <div style={{ height: '100px', width: '100px', backgroundColor: 'azure' }}>
        Messages...
      {msg}
      </div>
      <div>
        <input
          // value={textValue}
          onChange={(e) => setText(e.target.value)}
        ></input>
      </div>
      <button onClick={sendMsg}>Seng</button>
    </div >
  );
}

export default Chatroom;
