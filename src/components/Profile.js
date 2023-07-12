import React from "react";
import ClothesSection from "./ClothesCardSection";
import SideBar from "./Sidebar";
import "../blocks/Profile.css";

function Profile({
  cards,
  onCreateModal,
  onSelectCard,
  openEditProfileModal,
  onCardLike,
  onLogOut,
  userLoggedIn,
}) {
  return (
    <div className="profile">
      <SideBar
        handleEditProfile={openEditProfileModal}
        handleLogOut={onLogOut}
      />
      <ClothesSection
        cards={cards}
        onCreateModal={onCreateModal}
        onSelectCard={onSelectCard}
        onCardLike={onCardLike}
      />
    </div>
  );
}

export default Profile;
