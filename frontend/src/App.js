import React from "react";
import { Button, Chat } from "./components";
import { Route } from "react-router-dom";


import "animate.css";

const bd = [
  { className: "room", text: "Спикеры" },
  { className: "church", text: "Фронтенд" },
  { className: "golf", text: "Бэкенд" },
  { className: "home", text: "Стартап" },
  { className: "park", text: "Инвесторы" },
];

function App() {
  return (
    <div>
      <Route exact path="/">
        <div className="app">
          {bd &&
            bd.map((btn, index) => {
              const { className, text } = btn;
              return <Button key={index} className={className} text={text} />;
            })}
            <div className='game'></div>
        </div>
      </Route>
      <Route exact path="/chat">
        <Chat />
      </Route>
    </div>
  );
}

export default App;
