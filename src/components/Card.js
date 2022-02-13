import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {

  const user = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner === user._id;
  const cardDeleteButtonClassName = (
    `${isOwn ? 'post__delete-button' : 'post__delete-button post__delete-button_hiden'}`
  );
  const isLiked = props.card.likes.some(i => i === user._id);
  const cardLikeButtonClassName = (
    `${isLiked ? 'post__button post__button_active' : 'post__button'}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card._id);
  }

  return (
    <div className="post">
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick}/>
      <button onClick={handleClick} className="post__image-button" id="image__button">
        <img  src={props.card.link} alt={`A pic of ${props.card.name}`} className="post__image" id="image__button-image"/>
      </button>
      <div className="post__bottom-container">
        <h2 className="post__heading">{props.card.name}</h2>
        <div className="post__like-container">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}/>
          <p className="post__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;


