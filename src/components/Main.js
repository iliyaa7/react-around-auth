import React from "react";
import editProfileBtnPath from "../images/batton-prof_edit.svg"
import editPlusBtnPath from "../images/batton-plus.svg"
import {api} from "../utils/api";
import Card from "./Card.js";
import CurrentUserContext from "../contexts/CurrentUserContext";
import CardsContext from "../contexts/CardsContext";

function Main(props) {
  const cards = React.useContext(CardsContext);
  const user = React.useContext(CurrentUserContext);



  return (
    <main className="content">
      <section className="profile">
        <div className="profile__images-container">
          <img src={user.avatar} id="profile-image"  alt="Your profile photo" className="profile__image"/>
          <button onClick={props.handleEditAvatarClick} type="button" className="profile__image-button">
            <img src={editProfileBtnPath} alt="A photo of an edit button" className="profile__image-overlay"/>
          </button>
        </div>
        <div className="profile__rows">
          <div className="profile__top-row">
            <h1 className="profile__title">{user.name}</h1>
            <button onClick={props.handleEditProfileClick} type="button" className="profile__info-button">
              <img src={editProfileBtnPath} id="profile-button" alt="A photo of an edit button" className="profile__info-image"/>
            </button>
          </div>
          <h2 className="profile__subtitle">{user.about}</h2>
        </div>
        <button onClick={props.handleAddCardClick} type="button" className="profile__plus-button" id="plus__button">
          <img src={editPlusBtnPath} id="plus-button" alt="A photo of a plus button" className="profile__plus-image"/>
        </button>
      </section>

      <section className="post-container">
        {cards.map(card => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.handleCardLike} onCardDelete={props.handleDeleteBtnClick}/>
        ))}
      </section>
    </main>
  );
}

export default Main;

// server {

//   server_name api.iliyaa7.students.nomoreparties.sbs;

//   location / {
//     proxy_pass http://localhost:3000;
//     proxy_http_version 1.1;
//     proxy_set_header Upgrade $http_upgrade;
//     proxy_set_header Connection 'upgrade';
//     proxy_set_header Host $host;
//     proxy_cache_bypass $http_upgrade;
//   }

//     listen 443 ssl; # managed by Certbot
//     ssl_certificate /etc/letsencrypt/live/iliyaa7.students.nomoreparties.sbs/fullchain.pem; # managed by Certbot
//     ssl_certificate_key /etc/letsencrypt/live/iliyaa7.students.nomoreparties.sbs/privkey.pem; # managed by Certbot
//     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
//     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot



// }

// server {

//   server_name iliyaa7.students.nomoreparties.sbs www.iliyaa7.students.nomoreparties.sbs;

//   root /home/iliyaa7/frontend;
//   location / {
//     try_files $uri $uri/ /index.html =404;
//   }

//     listen 443 ssl; # managed by Certbot
//     ssl_certificate /etc/letsencrypt/live/iliyaa7.students.nomoreparties.sbs/fullchain.pem; # managed by Certbot
//     ssl_certificate_key /etc/letsencrypt/live/iliyaa7.students.nomoreparties.sbs/privkey.pem; # managed by Certbot
//     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
//     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot



// }

// server {
//   if ($host = www.iliyaa7.students.nomoreparties.sbs) {
//       return 301 https://$host$request_uri;
//   } # managed by Certbot


//   if ($host = iliyaa7.students.nomoreparties.sbs) {
//       return 301 https://$host$request_uri;
//   } # managed by Certbot


// listen 80;

// server_name iliyaa7.students.nomoreparties.sbs www.iliyaa7.students.nomoreparties.sbs;
//   return 404; # managed by Certbot
// }










// server {

//   server_name iliyaa7.students.nomoreparties.sbs www.iliyaa7.students.nomoreparties.sbs;

//   root /home/iliyaa7/frontend;

//   location /api/ {
//     proxy_pass http://localhost:3000;
//     proxy_http_version 1.1;
//     proxy_set_header Upgrade $http_upgrade;
//     proxy_set_header Connection 'upgrade';
//     proxy_set_header Host $host;
//     proxy_cache_bypass $http_upgrade;
//   }

//     listen 443 ssl; # managed by Certbot
//     ssl_certificate /etc/letsencrypt/live/iliyaa7.students.nomoreparties.sbs/fullchain.pem; # managed by Certbot
//     ssl_certificate_key /etc/letsencrypt/live/iliyaa7.students.nomoreparties.sbs/privkey.pem; # managed by Certbot
//     include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
//     ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot



// }

// server {
//   if ($host = www.iliyaa7.students.nomoreparties.sbs) {
//       return 301 https://$host$request_uri;
//   } # managed by Certbot


//   if ($host = iliyaa7.students.nomoreparties.sbs) {
//       return 301 https://$host$request_uri;
//   } # managed by Certbot


// listen 80;

// server_name iliyaa7.students.nomoreparties.sbs www.iliyaa7.students.nomoreparties.sbs;
//   return 404; # managed by Certbot
// }