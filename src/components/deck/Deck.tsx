import { CardType } from "../../type/types";

export const generateDeck = (): CardType[] => {
  const suits = ["Coeur", "Carre", "Pique", "Trefle"];
  const values = ["7", "8", "9", "10", "J", "Q", "K", "A"];
  const deck: CardType[] = [];

  suits.forEach((suit) => {
    values.forEach((value) => {
      deck.push({ value, suit });
    });
  });

  return deck;
};
