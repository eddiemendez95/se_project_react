import React from "react";
import ClothesSection from "./ClothesCardSection";

function Profile({ cards, handleAddClick, onSelectCard }) {
  return (
    <div className="profile">
      <ClothesSection
        cards={cards}
        onClick={handleAddClick}
        onSelectCard={onSelectCard}
      />
    </div>
  );
}

export default Profile;
