import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardList = ({ cards }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [prevIsDisabled, setPrevIsDisabled] = useState(true);
  const [nextIsDisabled, setNextIsDisabled] = useState(false);

  function previousCard() {
    setCardIndex(cardIndex - 1);
    updateButton();
  }

  function nextCard() {
    setCardIndex(cardIndex + 1);
  }

  useEffect(() => {
    updateButton();
  }, [cardIndex]);

  function updateButton() {
    if (cardIndex === 0) {
      setPrevIsDisabled(true);
    } else if (cardIndex === cards.length - 1) {
      setNextIsDisabled(true);
    } else {
      setPrevIsDisabled(false);
      setNextIsDisabled(false);
    }
  }

  return (
    <div>
      <div className="CardList">
        <Card card={cards[cardIndex]} />
      </div>
      <button onClick={previousCard} disabled={prevIsDisabled}>
        Prev
      </button>
      <button onClick={nextCard} disabled={nextIsDisabled}>
        Next
      </button>
    </div>
  );
};

export default CardList;
