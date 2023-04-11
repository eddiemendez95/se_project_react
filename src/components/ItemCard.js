const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div className="card">
        <img
          src={item.link}
          className="card_image"
          onClick={() => onSelectCard(item)}
        />

        <div className="card__name-container">
          <div className="card_name">{item.name}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
