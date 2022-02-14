const fetchFunction = (url, headers) => {
  return fetch(url, headers)
    .then(res => res.ok ? res.json() : res.json().then(err => Promise.reject(err)))

}


class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  getUserInfo(token) {
    return fetchFunction(`${this._baseUrl}/users/me`, {
      headers: {
      authorization: `Bearer ${ token }`,
      "Content-Type": "application/json",
    },
    });
  }

  getCards(token) {
    return fetchFunction(`${this._baseUrl}/cards`, {
      headers: {
      authorization: `Bearer ${ token }`,
      "Content-Type": "application/json",
    },
    });
  }

  editUserInfo(data, token) {
    return fetchFunction(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
      authorization: `Bearer ${ token }`,
      "Content-Type": "application/json",
    },
      body: JSON.stringify(data)
    });
  }

  addPostCard(data, token) {
    return fetchFunction(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
      authorization: `Bearer ${ token }`,
      "Content-Type": "application/json",
    },
      body: JSON.stringify(data)
    });
  }

  changeLikeCardStatus(cardId, isLiked, token) {
    if (isLiked) {
      return fetchFunction(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: {
      authorization: `Bearer ${ token }`,
      "Content-Type": "application/json",
    },
      });
    }
    return fetchFunction(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: {
      authorization: `Bearer ${ token }`,
      "Content-Type": "application/json",
    },
    });
  }

  deleteCard(cardId, token) {
    return fetchFunction(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
      authorization: `Bearer ${ token }`,
      "Content-Type": "application/json",
    },
    });
  }

  editAvatar(data, token) {
    return fetchFunction(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
      authorization: `Bearer ${ token }`,
      "Content-Type": "application/json",
    },
      body: JSON.stringify(data)
    });
  }
}
const api = new Api({
  baseUrl: "https://api.iliyaa7.students.nomoreparties.sbs",
});

export default api


