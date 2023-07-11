import React, { useContext } from "react";
import "../blocks/Card.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some((user) => user._id === currentUser._id);

  const itemLikeButtonClassName = `...`;

  return (
    <div>
      <div className="card">
        <img
          src={item.imageUrl}
          alt={item.name}
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
