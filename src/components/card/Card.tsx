// ----------- Représente une carte ---------

import React from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  value: string;
  suit: string;
  faceUp: boolean;
  onClick: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  value,
  suit,
  faceUp,
  onClick,
  className,
}) => {
  return (
    <motion.div
      className={cn(`card ${faceUp ? "" : "flipped"}`, className)}
      onClick={onClick}
      animate={{ rotateY: faceUp ? 0 : 180 }}
      transition={{ duration: 0.5 }}
    >
      {faceUp ? `${value} de ${suit}` : "?"}
    </motion.div>
  );
};

export default Card;
