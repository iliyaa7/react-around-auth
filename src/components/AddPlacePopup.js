import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPostPopup(props) {
  const [title, setTitle] = React.useState('');

  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    setTitle('');
    setUrl('');
}, [props.isOpen]);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleLinkChange(e) {
    setUrl(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: title,
      link: url
    });

  }

  return (
    <PopupWithForm id="add-post" title="New place" submitBtnTitle="Create" onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} >
      <input onChange={handleTitleChange} type="text" name="name" className="popup__form-input" placeholder="Title" id="title" value={title || ""} minLength="2" maxLength="30" required/>
      <span className="popup__form-input-error" id="title-error"></span>
      <input onChange={handleLinkChange} type="url" name="link" className="popup__form-input" placeholder="Image link" id="link" value={url || ""} required/>
      <span className="popup__form-input-error" id="link-error"></span>
    </PopupWithForm >
  );
}

export default AddPostPopup;
