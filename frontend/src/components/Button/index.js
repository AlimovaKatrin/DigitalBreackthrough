import React from "react";

export default function Button({text, className}) {
  return (
    <div className={`block animate__animated animate__pulse animate__repeat-3 animate__slow ${className}`}>
      <h1 className="title">{text}</h1>
      <div className="content">
        <button className='button'>
          <span><a href="/chat"> перейти в комнату</a></span>
        </button>
      </div>
    </div>
  );
}
