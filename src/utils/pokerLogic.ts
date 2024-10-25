import { HandType } from "../type/types";

export const evaluateHand = (hand: HandType): number => {
  const order = ["7", "8", "9", "10", "J", "Q", "K", "A"];
  const valueMap = hand.reduce((acc: { [key: string]: number }, card) => {
    acc[card.value] = (acc[card.value] || 0) + 1;
    return acc;
  }, {});

  const values = Object.values(valueMap);

  if (values.includes(4)) {
    return 5;
  } else if (values.includes(3) && values.includes(2)) {
    return 4;
  } else if (values.includes(3)) {
    return 3;
  } else if (values.filter((value) => value === 2).length === 2) {
    return 2;
  } else if (values.includes(2)) {
    return 1;
  } else if (isStraight(hand, order)) {
    return 6;
  }

  return Math.max(...hand.map((card) => order.indexOf(card.value)));
};

const isStraight = (hand: HandType, order: string[]): boolean => {
  const handValues = hand
    .map((card) => order.indexOf(card.value))
    .sort((a, b) => a - b);

  for (let i = 0; i < handValues.length - 1; i++) {
    if (handValues[i + 1] !== handValues[i] + 1) {
      return false;
    }
  }
  return true;
};
