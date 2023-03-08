import React, { useState } from "react";

const Card = ({ card }) => {
  const [isCardFront, setIsCardFront] = useState(true);
  const cardClass = `card ${isCardFront ? "front" : "back"}`;
    return (
    <div className={cardClass} onClick={() => setIsCardFront(!isCardFront)}>
      {/* <div className="front">{card.front}</div>
      <div className="back">{card.back}</div> */}
            {isCardFront ? card.front : card.back}
            {card.id}
    </div>
  );
};

export default Card;
