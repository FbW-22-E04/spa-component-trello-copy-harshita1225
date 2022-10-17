import React from "react";
import "./card.css";
import Button from "./Button";
import AddCard from "./AddCard";

function Cards(props) {
  return (
    <div className="container">
      {props.list.map((card, idx) => (
        <div className="outercontainer" key={idx}>
          <div className="topcardsection">
            <h3 class="cardtitle">{card.title}</h3>
            <Button />
          </div>
          <AddCard card={card} />
          {/*  <div>
            {card.children.map((item, i) => (
              <div key={i}>
                <p>{item.text}</p>
              </div>
            ))}
          </div> */}
        </div>
      ))}

      {/*  <div>
        <div>
          <h3>{props.list[0].title}</h3>
          <Button />
        </div>
        <div>
          {props.list[0].children.map((item, i) => (
            <div key={i}>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
export default Cards;
