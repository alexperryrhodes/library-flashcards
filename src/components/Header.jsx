import React from "react";

const Header = ({ cardCount }) => {
  return (
    <div className="Header">
      <h1>Who Said...?</h1>
      <h3>Test your knowledge of famous literary quotes!</h3>
          <p>For each quote below, name the book the quote is from</p>
          <p>For extra bonus points, see if you can name the author as well!</p>
          <p>Total Cards: { cardCount }</p>
    </div>
  );
};

export default Header;
