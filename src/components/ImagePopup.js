import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup ${props.isOpen && "popup_opened"}`} id="picture">
      <div className="popup__grid">
        <button onClick={props.onClose} type="button" className="popup__close-button popup__close-button_type_image" id="close__picture"/>
        <div className="popup__holder">
          <img src={props.selectedCard.link} alt={`"A picture of " ${props.selectedCard.name}`} className="popup__image" id="popup__image"/>
          <p className="popup__caption">{props.selectedCard.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
