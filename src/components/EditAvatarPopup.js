import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const linkRef = React.useRef(null);

  React.useEffect(() => {
    linkRef.current.value = '';
}, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: linkRef.current.value
    });
  }

  return (
    <PopupWithForm id="edit-profile-picture" title="Change profile picture" submitBtnTitle="Save" onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} >
    <input ref={linkRef} type="url" name="avatar" className="popup__form-input" placeholder="Image link" id="avatar"  required/>
    <span className="popup__form-input-error" id="avatar-error"></span>
  </PopupWithForm >
  );
}

export default EditAvatarPopup;


