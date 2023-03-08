import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CardList from "./components/CardList";

function App() {
  const [cards, setCards] = useState(cardData);

  return (
    <div className="App">
      <Header />
      <CardList cards={cards} />
    </div>
  );
}

export default App;

const cardData = [
  {
    id: 0,
    data: {
      front: "quote0",
      back: "author0",
    },
  },
  {
    id: 1,
    data: {
      front: "quote1",
      back: "author1",
    },
  },
  {
    id: 2,
    data: {
      front: "quote2",
      back: "author2",
    },
  },
  {
    id: 3,
    data: {
      front: "quote3",
      back: "author4",
    },
  },
];
