import React from "react";
import ModalWithForm from "../components/ModalWithForm";
import { useState, useEffect } from "react";

const RegisterModal = ({
  isOpen,
  onRegisterUser,
  onClose,
  switchToLoginModal,
}) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userAvatarLink, setUserAvatarLink] = useState("");

  useEffect(() => {
    setUserEmail("");
    setUserPassword("");
    setUserName("");
    setUserAvatarLink("");
  }, [isOpen]);

  function handleUserEmailChange(e) {
    setUserEmail(e.target.value);
  }

  function handleUserPasswordChange(e) {
    setUserPassword(e.target.value);
  }
  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }

  function handleUserAvatarLinkChange(e) {
    setUserAvatarLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newUser = {};
    newUser.email = userEmail;
    newUser.password = userPassword;
    newUser.name = userName;
    newUser.avatar = userAvatarLink;
    onRegisterUser(newUser);
  }

  return (
    <ModalWithForm
      buttonText="Next"
      title="Sign up"
      onClose={onClose}
      name="new-user-signup"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" id="modal-emaillabel">
        Email*
        <input
          className="modal__input"
          id="modal-email"
          type="email"
          name="email"
          placeholder="Email"
          value={userEmail}
          onChange={handleUserEmailChange}
          required
        />
      </label>
      <span className="modal__error" id="modal-email-error"></span>
      <label className="modal__label" id="modal-passwordlabel">
        Password*
        <input
          className="modal__input"
          id="modal-password"
          type="password"
          name="password"
          placeholder="Password"
          value={userPassword}
          onChange={handleUserPasswordChange}
          required
        />
      </label>
      <label className="modal__label" id="modal-namelabel">
        Name
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
        Avatar URL
        <input
          className="modal__input"
          id="modal-link"
          type="url"
          name="link"
          placeholder="Avatar URL"
          value={userAvatarLink}
          onChange={handleUserAvatarLinkChange}
        />
      </label>
      <div className="modal__switchlink-register" onClick={switchToLoginModal}>
        or Log In
      </div>
    </ModalWithForm>
  );
};

export default RegisterModal;
