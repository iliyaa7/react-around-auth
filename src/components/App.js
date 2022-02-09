import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../index.css';
import Header from "./Header.js"
import Main from "./Main.js"
import Footer from "./Footer.js"
import PopupWithForm from "./PopupWithForm.js"
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPostPopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import CurrentUserContext from '../contexts/CurrentUserContext';
import api  from '../utils/api';
import CardsContext from '../contexts/CardsContext';
import Login from './Login';
import Register from './Register';
import ProtectedRoute  from './ProtectedRoute';
import auth from '../utils/auth';
import { useHistory } from "react-router";


function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  const [isAddPostPopupOpen, setIsAddPostPopupOpen] = React.useState(false);

  const [isDeletePostPopupOpen, setIsDeletePostPopupOpen] = React.useState(false);

  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [isInfoToolOpen, setIsInfoToolOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  const [cardToDelete, setCardToDelete] = React.useState({});

  const [cards, setCards] = React.useState([]);

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [isResponseSuccessfull, setIsResponseSuccessfull] = React.useState(false);

  const [userEmail, setUserEmail] = React.useState('')

  const history = useHistory();

  React.useEffect(() => {
    api.getCards().then((res) => {
      setCards(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])

  React.useEffect(() => {
    auth.getUserInfo(localStorage.getItem('token')).then((res) => {
      setUserEmail(res.data.email);
      setIsLoggedIn(true);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [])



  function handleRegister(data) {
    auth.signup(data).then(() => {
      setIsResponseSuccessfull(true);
      setIsInfoToolOpen(true);
      history.push({pathname:  "/signin",})
    })
    .catch((err) => {
      console.log(`error ${err} - one of the fields was filled in incorrectly`);
      setIsResponseSuccessfull(false);
      setIsInfoToolOpen(true);
    });
  }

  function handleSignin(data) {
    auth.signin(data).then((res) => {
      localStorage.setItem('token', res.token);
      setUserEmail(data.email);
      setIsLoggedIn(true);
    })
    .catch((err) => {
      console.log(err);
      if (err === 400) {
        console.log(`error ${err} - one of the fields was filled in incorrectly`);
      } else if (err === 401) {
        console.log(`error ${err} - the user with the specified email not found`);
      }
      setIsResponseSuccessfull(false);
      setIsInfoToolOpen(true);
    });
  }


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddPostPopupOpen(true);
  }

  function handleDeleteBtnClick(cardId) {
    setIsDeletePostPopupOpen(true);
    setCardToDelete(cardId);
  }

  function handleCardClick(newSelctedCard) {
    setSelectedCard(newSelctedCard);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPostPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsInfoToolOpen(false);
  }

  function closeDeletePopup() {
    setIsDeletePostPopupOpen(false);
    setCardToDelete({})
  }

  function handleDeleteCardSubmit(evt) {
    evt.preventDefault();
    api.deleteCard(cardToDelete).then(() => {
      const newCards = cards.filter((card) => card._id !== cardToDelete);
      setCards(newCards);
      setIsDeletePostPopupOpen(false);
      setCardToDelete({})
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleUpdateUser(data) {
    api.editUserInfo(data).then((res) =>{
      setCurrentUser(res);
      setIsEditProfilePopupOpen(false);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleUpdateAvatar(data) {
    api.editAvatar(data).then((res) =>{
      setCurrentUser(res);
      setIsEditAvatarPopupOpen(false);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleAddPost(data) {
    api.addPostCard(data).then((newCard) =>{
      setCards([newCard, ...cards]);
      setIsAddPostPopupOpen(false);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleLogOut() {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  return (
    <Switch>
      <Route path="/signin">
        {isLoggedIn ? <Redirect to="/" /> : <Login handleSignin={handleSignin} isOpen={isInfoToolOpen} onClose={closeAllPopups} isSuccessfull={isResponseSuccessfull}/>}
      </Route>
      <Route path="/register">
      {isLoggedIn ? <Redirect to="/" /> : <Register handleRegister={handleRegister} isOpen={isInfoToolOpen} onClose={closeAllPopups} isSuccessfull={isResponseSuccessfull}/>}
      </Route>
      <ProtectedRoute path="/" loggedIn={isLoggedIn}>
        <div className="body">
          <CurrentUserContext.Provider value={currentUser}>
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}>
            </EditAvatarPopup>

            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}>
            </EditProfilePopup>

            <AddPostPopup isOpen={isAddPostPopupOpen} onClose={closeAllPopups} onUpdateUser={handleAddPost}>
            </AddPostPopup>

            <PopupWithForm id="delete-post" title="Are you sure?" submitBtnTitle="Yes" isOpen={isDeletePostPopupOpen} onClose={closeDeletePopup} onSubmit={handleDeleteCardSubmit} >
            </PopupWithForm >

            <ImagePopup isOpen={isImagePopupOpen} selectedCard={selectedCard} onClose={closeAllPopups}/>

            <div className="page">

              <Header userEmail={userEmail} isLoggedIn={isLoggedIn} handleLogOut={handleLogOut}/>
              <CardsContext.Provider value={cards}>
                <Main
                handleEditAvatarClick={handleEditAvatarClick}
                handleEditProfileClick={handleEditProfileClick}
                handleAddCardClick={handleAddCardClick}
                handleDeleteBtnClick={handleDeleteBtnClick}
                onCardClick={handleCardClick}
                handleCardLike={handleCardLike}
                />
              </CardsContext.Provider>
              <Footer/>
            </div>
          </CurrentUserContext.Provider>
        </div>
      </ProtectedRoute>
    </Switch>
  );
}

export default App;
