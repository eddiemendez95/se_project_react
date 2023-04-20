import React from "react";
import ClothesSection from "./ClothesCardSection";
import SideBar from "./Sidebar";
import "../blocks/Profile.css";

function Profile({ cards, onCreateModal, onSelectCard }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        cards={cards}
        onCreateModal={onCreateModal}
        onSelectCard={onSelectCard}
      />
    </div>
  );
}

export default Profile;
