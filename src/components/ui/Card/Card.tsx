import React from "react";
import "./Card.scss";

interface ICardProps {
  children: any;
  extend?: boolean;
}
export const Card: React.FC<ICardProps> = ({
  children,
  extend,
}: ICardProps) => {
  return (
    <div className={`vira-card ${extend && "vira-card-extended"}`}>
      {children}
    </div>
  );
};
