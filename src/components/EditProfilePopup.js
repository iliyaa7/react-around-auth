import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, props.isOpen]);

  const [name, setName] = React.useState('');

  const [about, setAbout] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAboutChange(e) {
    setAbout(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about,
    });
  }

  return (
    <PopupWithForm id="edit-profile" title="Edit profile" submitBtnTitle="Save" onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} >
      <input onChange={handleNameChange} type="text" name="name" className="popup__form-input" placeholder="Name" id="name" value={name || ""} minLength="2" maxLength="40" required/>
      <span className="popup__form-input-error" id="name-error"></span>
      <input onChange={handleAboutChange} type="text" name="about" className="popup__form-input" placeholder="About me" id="about" value={about || ""} minLength="2" maxLength="50" required/>
      <span className="popup__form-input-error" id="about-error"></span>
    </PopupWithForm >
  );
}

export default EditProfilePopup;


