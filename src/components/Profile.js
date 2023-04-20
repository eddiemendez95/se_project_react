import React from "react";
import ClothesSection from "./ClothesCardSection";
import SideBar from "./Sidebar";
import "../blocks/Profile.css";

function Profile({ cards, handleAddClick, onSelectCard }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        cards={cards}
        onClick={handleAddClick}
        onSelectCard={onSelectCard}
      />
    </div>
  );
}

export default Profile;
