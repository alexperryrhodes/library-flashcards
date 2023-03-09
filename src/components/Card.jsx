import React, { useState } from "react";

const Card = ({ card }) => {
  const [isCardFront, setIsCardFront] = useState(true);
  const cardClass = `card ${isCardFront ? "front" : "back"}`;
  return (
    <div className={cardClass} onClick={() => setIsCardFront(!isCardFront)}>
      {isCardFront ? card.data.front : card.data.back}
    </div>
  );
};

export default Card;
