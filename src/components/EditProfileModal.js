import React from "react";
import ModalWithForm from "./ModalWithForm";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const EditProfileModal = ({ isOpen, onClose, onEditProfile }) => {
  const currentUser = useContext(CurrentUserContext);
  const currentUserName = currentUser?.data?.name;
  const currentUserAvatar = currentUser?.data?.avatar;

  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    setUserName(currentUserName);
    setUserAvatar(currentUserAvatar);
  }, [currentUserName, currentUserAvatar]);

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }

  function handleUserAvatarChange(e) {
    setUserAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const update_user = {};
    update_user.name = userName;
    update_user.avatar = userAvatar;
    onEditProfile(update_user);
  }

  return (
    <ModalWithForm
      buttonText="Save changes"
      title="Change Profile Data"
      name="user-profile-edit"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <label className="modal__label" id="modal-namelabel">
        Name*
        <input
          className="modal__input"
          id="modal-name"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          value={userName}
          onChange={handleUserNameChange}
          required
        />
      </label>
      <label className="modal__label" id="modal-imagelabel">
        Avatar
        <input
          className="modal__input"
          id="modal-link"
          type="url"
          name="link"
          placeholder="Avatar URL"
          value={userAvatar}
          onChange={handleUserAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
