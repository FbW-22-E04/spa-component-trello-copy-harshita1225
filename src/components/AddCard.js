import React from "react";
import "./card.css";
function AddCard(props) {
  return (
    <div className="cardcontainer">
      {props.card.children.map((item, i) => (
        <div className="todo" key={i}>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default AddCard;
