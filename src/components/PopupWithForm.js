import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup ${props.isOpen && "popup_opened"}`} id={`${props.id}__popup`}>
      <button onClick={props.onClose} type="button" className="popup__close-button" id="close__form"/>
      <div className="popup__container">
        <form action="#" className="popup__form" name={`{props.name}-form`} onSubmit={props.onSubmit}>
          <h2 className="popup__form-heading">{props.title}</h2>
          {props.children}
          <button type="submit" className="popup__save-button">{props.submitBtnTitle}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
