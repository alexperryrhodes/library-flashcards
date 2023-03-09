import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CardList from "./components/CardList";

function App() {
  const [cards, setCards] = useState(cardData);

  return (
    <div className="App">
      <Header cardCount={cards.length}/>
      <CardList cards={cards} />
    </div>
  );
}

export default App;

const cardData = [
  {
    id: 0,
    data: {
      front: '"It was the best of times, it was the worst of times."',
      back: "A Tale of Two Cities\n- Charles Dickens",
    },
  },
  {
    id: 1,
    data: {
      front: '"My dear, I don’t give a damn"',
      back: "Gone With the Wind\n-Margaret Mitchell",
    },
  },
  {
    id: 2,
    data: {
      front: '"I am no bird; and no net ensnares me: I am a free human being with an independent will."',
      back: "Jane Eyre\n-Charlotte Brontë",
    },
  },
  {
    id: 3,
    data: {
      front: '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."',
      back: "Pride and Prejudice\n-Jane Austen",
    },
  },
  {
    id: 4,
    data: {
      front: '"All happy families are alike; each unhappy family is unhappy in its own way."',
      back: "Anna Karenina\n-Leo Tolstoy",
    },
  },
  {
    id: 5,
    data: {
      front: '"My name is Inigo Montoya, you killed my father, prepare to die!"',
      back: "The Princess Bride\n- William Goldman",
    },
  },
  {
    id: 6,
    data: {
      front: '"There is no greater agony than bearing an untold story inside you."',
      back: "I Know Why the Caged Bird Sings\n-Maya Angelou",
    },
  },
  {
    id: 7,
    data: {
      front: '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."',
      back: "Pride and Prejudice\n-Jane Austen",
    },
  },
  {
    id: 8,
    data: {
      front: '"There are years that ask questions and years that answer."',
      back: "Their Eyes Were Watching God\n-Zora Neale Hurston",
    },
  },
  {
    id: 9,
    data: {
      front: '"A rat in a maze is free to go anywhere, as long as it stays inside the maze."',
      back: "The Handmaid’s Tale\n-Margaret Atwood",
    },
  },
  
];
