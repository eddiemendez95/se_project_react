import React, { useContext } from "react";
import ItemCard from "./ItemCard";
import "../blocks/ClothesCardSection.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const ClothesSection = ({ cards, onCreateModal, onSelectCard, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <h2 className="clothes-section__header-text">Your Items</h2>
        <button
          className="clothes-section__add-button"
          type="button"
          onClick={onCreateModal}
        >
          + Add new
        </button>
      </div>
      <div className="clothes-section__cards-container">
        {cards.map((card) => {
          return (
            <ItemCard
              key={card._id}
              item={card}
              onSelectCard={onSelectCard}
              onCardLike={onCardLike}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
