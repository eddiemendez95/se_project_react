import "../blocks/ItemModal.css";

const ItemModal = ({ selectedCard, onClose, onOpenDeleteModal }) => {
  return (
    <div className="modal">
      <div className="modal_content">
        <button type="button" onClick={onClose} className="modal_close" />
        <img src={selectedCard.imageUrl} alt={selectedCard.name} />
        <div className="modal_caption">
          <div className="modal_caption-title">{selectedCard.name} </div>
          <div className="modal_caption-title">
            Weather: {selectedCard.weather}
          </div>
          <div>
            <button
              type="button"
              className="modal__delete-button"
              onClick={onOpenDeleteModal}
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
