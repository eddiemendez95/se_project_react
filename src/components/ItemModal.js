import React, { useContext } from "react";
import "../blocks/ItemModal.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, onOpenDeleteModal }) => {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner._id === currentUser?.data?._id;

  return (
    <div className="modal">
      <div className="modal_content">
        <button type="button" onClick={onClose} className="modal_close" />
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal__clothes-image"
        />
        <div className="modal_caption">
          <div className="modal_caption-title">{selectedCard.name} </div>
          <div className="modal_caption-title">
            Weather: {selectedCard.weather}
          </div>
          <div>
            {isOwn ? (
              <button
                type="button"
                className="modal__delete-button"
                onClick={onOpenDeleteModal}
              >
                Delete item
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
