
import React from "react";
import { Button } from "./components";
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
    <div className="app">
      {bd &&
        bd.map((btn) => {
          const { className, text } = btn;
          return <Button className={className} text={text} />;
        })}
    </div>)
}
export default App;
