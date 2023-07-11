import React from "react";
import ModalWithForm from "../components/ModalWithForm";
import { useState, useEffect } from "react";

const LoginModal = ({
  isOpen,
  onUserLogin,
  onClose,
  switchToRegisterModal,
}) => {
  const [userLoginEmail, setUserLoginEmail] = useState("");
  const [userLoginPassword, setUserLoginPassword] = useState("");

  useEffect(() => {
    setUserLoginEmail("");
    setUserLoginPassword("");
  }, [isOpen]);

  function handleUserLoginEmailChange(e) {
    setUserLoginEmail(e.target.value);
  }

  function handleUserLoginPasswordChange(e) {
    setUserLoginPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const userLogin = {};
    userLogin.email = userLoginEmail;
    userLogin.password = userLoginPassword;
    onUserLogin(userLogin);
  }

  return (
    <ModalWithForm
      buttonText="Log in"
      title="Log in"
      onClose={onClose}
      name="user-login"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal__label" id="modal-emaillabel">
        Email
        <input
          className="modal__input"
          id="modal-email"
          type="email"
          name="email"
          placeholder="Email"
          value={userLoginEmail}
          onChange={handleUserLoginEmailChange}
          required
        />
      </label>
      <span className="modal__error" id="modal-email-error"></span>
      <label className="modal__label" id="modal-passwordlabel">
        Password
        <input
          className="modal__input"
          id="modal-password"
          type="password"
          name="password"
          placeholder="Password"
          value={userLoginPassword}
          onChange={handleUserLoginPasswordChange}
          required
        />
      </label>
      <p className="modal__switchlink-login" onClick={switchToRegisterModal}>
        or Register
      </p>
      <span className="modal__error-login" id="modal-link-error"></span>
    </ModalWithForm>
  );
};

export default LoginModal;
