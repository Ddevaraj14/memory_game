// src/components/Board.js
import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Board.css";

const images = [
  /* Add paths to your images here */
  <img src="image1.png" alt="" />,
  <img src="image1.png" alt="" />,
  <img src="image1.png" alt="" />,
  <img src="image1.png" alt="" />,
  <img src="image1.png" alt="" />,
  <img src="image1.png" alt="" />,
  <img src="image1.png" alt="" />,
  <img src="image1.png" alt="" />,
];

const Board = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    // Initialize cards with images
    const initialCards = images
      .concat(images) // Duplicate images to create pairs
      .map((image, index) => ({
        id: index,
        image,
        isFlipped: false,
      }));
    setCards(shuffle(initialCards));
  }, []);

  const handleClick = (id) => {
    if (flippedCards.length === 2) return; // Already two cards flipped

    const newCards = cards.map((card) =>
      card.id === id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);
    setFlippedCards([...flippedCards, id]);

    if (flippedCards.length === 1) {
      // Second card flipped
      if (newCards[flippedCards[0]].image === newCards[id].image) {
        // Match found
        setMatchedCards([...matchedCards, flippedCards[0], id]);
      } else {
        // No match, flip back after a delay
        setTimeout(() => {
          const resetCards = newCards.map((card) =>
            matchedCards.includes(card.id)
              ? card
              : { ...card, isFlipped: false }
          );
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const shuffle = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          image={card.image}
          isFlipped={card.isFlipped || matchedCards.includes(card.id)}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Board;
