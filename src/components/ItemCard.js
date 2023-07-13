import React, { useContext } from "react";
import "../blocks/Card.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import liked from "../images/liked.svg";
import unliked from "../images/unliked.svg";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);
  console.log(item);
  const isLiked =
    item?.likes?.length > 0 &&
    item.likes.some((like) => like === currentUser?.data?._id);

  const handleLikeClick = () => {
    console.log(item, "handleLIke");
    onCardLike(item._id, isLiked, currentUser);
  };

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
          <p className="card_name">{item.name}</p>
          <img
            src={isLiked ? liked : unliked}
            alt="like button"
            className="card__like"
            onClick={() => handleLikeClick()}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
