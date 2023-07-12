import React, { useContext } from "react";
import "../blocks/Sidebar.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const SideBar = ({ handleEditProfile, handleLogOut }) => {
  const currentUser = useContext(CurrentUserContext);
  const currentUserName = currentUser?.data?.name;
  const currentUserAvatar = currentUser?.data?.avatar;

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img
          className="sidebar__useravatar"
          src={currentUserAvatar}
          alt="avatar"
        />
        <div className="sidebar__username">{currentUserName}</div>
      </div>
      <button
        type="button"
        className="sidebar__edit-profile-button"
        onClick={handleEditProfile}
      >
        Change Profile Data
      </button>
      <button
        type="button"
        className="sidebar__edit-logout-button"
        onClick={handleLogOut}
      >
        Log out
      </button>
    </div>
  );
};

export default SideBar;
