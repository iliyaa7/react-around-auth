import React from "react";
import successPath from '../images/success-image.jpg';
import failedPath from '../images/failed-image.jpg';

function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen && "popup_opened"}`} id="picture">
      <div className="popup__grid">
        <button onClick={props.onClose} type="button" className="popup__close-button popup__close-button_type_image" id="close__picture"/>
        <div className="popup__holder popup__holder_type_tool-tip">
          <img src={props.response ? successPath : failedPath} alt="Succes icon" className="popup__image popup__image_type_tool-tip" id="popup__image"/>
          <p className="popup__caption popup__caption_type_tool-tip">{props.response ? "Success! You have now been registered." : "Oops, something went wrong! Please try again."}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;