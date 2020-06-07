import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMsgAC } from "../../redux/action";
import io from "socket.io-client";

import "./Chat.scss";

function Chatroom() {
  const socket = io.connect("http://localhost:5000/chat");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [textValue, setText] = useState("");
  const [textName, setName] = useState("");
  const [currentUser, setCurrent] = useState(state.currentUser);
  const [msg, setValue] = useState("");

  useEffect(() => {
    socket.on("chat message", (msg) => {
      if (currentUser.userId !== msg.userId) {
        dispatch(addMsgAC(msg.textValue, msg.userId, msg.textName, alertClass));
      }
      setValue(msg.textValue);
    });
  }, []);

  const sendMsg = (e) => {
    e.preventDefault();
    if (!textValue || !textName) {
      return;
    }
    const currentMsg = { textValue, userId: currentUser.userId, textName };
    dispatch(addMsgAC(textValue, currentUser.userId, textName, alertClass));
    setText("");
    socket.emit("chat message", currentMsg);
  };
  const { msgs } = state;
  const min = 1;
  const max = 6;
  let random = Math.floor(Math.random() * (max - min)) + min;

  let alertClass;

  switch (random) {
    case 1:
      alertClass = "secondary";
      break;
    case 2:
      alertClass = "danger";
      break;
    case 3:
      alertClass = "succsess";
      break;
    case 4:
      alertClass = "warning";
      break;
    case 5:
      alertClass = "info";
      break;
    case 6:
      alertClass = "light";
      break;
  }
console.log(state)
  return (
    <div className="body">
      <div className="chat__wrapper">
        <div className="chat__block">
          <div className="chat__msg">
            {msgs &&
              msgs.map((msg, index) => {
                return (
                  <div>
                    <b className={`name alert alert-${msg.className}`}>
                      {msg.name}:{" "}
                      <span className="text" key={index}>
                        {msg.msg}
                      </span>
                    </b>
                  </div>
                );
              })}
          </div>

          <form className="input-group mb-3">
            <input
              type="text"
              value={textName}
              placeholder="Ваше имя"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <input
              type="text"
              value={textValue}
              className="form-control"
              placeholder="Ваше сообщение"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setText(e.target.value)}
            />
            <div className="input-group-append">
              <button
                onClick={sendMsg}
                className="btn btn-primary"
                type="button"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatroom;
