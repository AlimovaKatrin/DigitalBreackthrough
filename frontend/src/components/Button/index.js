import React from "react";

export default function Button({text, className}) {
  return (
    <div className={`block animate__animated animate__pulse animate__repeat-3 animate__slow ${className}`}>
      <h1 className="title">{text}</h1>
      <div className="content">
        <button>
          <span>Перейти в комнату</span>
        </button>
      </div>
    </div>
  );
}
