const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className="modal">
      <div className="modal_content">
        <button type="button" onClick={onClose} className="modal_close" />
        <img src={selectedCard.link} />
        <div className="modal_caption">
          <div className="modal_caption-title">{selectedCard.name} </div>
          <div className="modal_caption-title">
            Weather: {selectedCard.weather}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
