import React from "react";

// Define the shape of a single card
interface Card {
  title: string;
  description: string;
}

// Props for the component
interface ThreeCardsProps {
  cards: Card[];
}

const ServiceThreeCards: React.FC<ThreeCardsProps> = ({ cards }) => {
  return (
    <div className="parent-services-three-cards-container">
      <div className="services-three-cards-container">
      {cards.map((card, index) => (
        <div className="service-single-card" key={index}>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ServiceThreeCards;
