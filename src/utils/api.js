const fetchFunction = (url, headers) => {
  return fetch(url, headers)
    .then(res => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))

}


class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUserInfo() {
    return fetchFunction(`${this._baseUrl}/users/me`, {
      headers: this._headers
    });
  }

  getCards() {
    return fetchFunction(`${this._baseUrl}/cards`, {
      headers: this._headers
    });
  }

  editUserInfo(data) {
    return fetchFunction(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data)
    });
  }

  addPostCard(data) {
    return fetchFunction(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data)
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return fetchFunction(`${this._baseUrl}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      });
    }
    return fetchFunction(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  deleteCard(cardId) {
    return fetchFunction(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  editAvatar(data) {
    return fetchFunction(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data)
    });
  }
}
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "fd1068ae-504b-49a0-9d62-632d18414be1",
    "Content-Type": "application/json",
  },
});

export default api


