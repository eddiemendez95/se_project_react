import React from "react";
import ModalWithForm from "../components/ModalWithForm";
import { useState, useEffect } from "react";

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const [itemName, setItemName] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [weatherType, setWeatherType] = useState("");

  useEffect(() => {
    setItemName("");
    setImageLink("");
    setWeatherType("");
  }, [isOpen]);

  function handleItemNameChange(e) {
    setItemName(e.target.value);
  }

  function handleItemImageLinkChange(e) {
    setImageLink(e.target.value);
  }

  function handleWeatherTypeChange(e) {
    setWeatherType(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const card = {};
    card.name = itemName;
    card.imageUrl = imageLink;
    card.weather = weatherType;
    onAddItem(card);
  }

  return (
    <ModalWithForm
      title="New garment"
      name="new-item-card"
      buttonText="Add garment"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label>
        <h3 className="modal__label">Name</h3>
        <input
          className="modal__input"
          type="text"
          name="name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          value={itemName}
          onChange={handleItemNameChange}
          required
        ></input>
      </label>
      <label>
        <h3 className="modal__label">Image</h3>
        <input
          className="modal__input"
          type="url"
          name="link"
          placeholder="Image Url"
          minLength="1"
          maxLength="30"
          value={imageLink}
          onChange={handleItemImageLinkChange}
          required
        ></input>
      </label>
      <p className="modal__radio">Select the Weather Type</p>
      <div className="modal__radio-button">
        <div>
          <input
            type="radio"
            id="hot"
            value="hot"
            checked={weatherType === "hot"}
            onChange={handleWeatherTypeChange}
            required
            className="modal__radio-buttons"
          />
          <label>Hot</label>
        </div>
        <div>
          <input
            type="radio"
            id="warm"
            value="warm"
            checked={weatherType === "warm"}
            onChange={handleWeatherTypeChange}
            className="modal__radio-buttons"
          />
          <label>Warm</label>
        </div>
        <div>
          <input
            type="radio"
            id="cold"
            value="cold"
            checked={weatherType === "cold"}
            onChange={handleWeatherTypeChange}
            className="modal__radio-buttons"
          />
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
