const fetchFunction = (url, headers) => {
  return fetch(url, headers)
    .then(res => res.ok ? res.json() : res.json().then(err => Promise.reject(err)))

}


class Auth {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  signup(data) {
    return fetchFunction(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  }

  signin(data) {
    return fetchFunction(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  }

  getUserInfo(token) {
    return fetchFunction(`${this._baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    });
  }


}
const auth = new Auth({
  baseUrl: "https://api.iliyaa7.students.nomoreparties.sbs"
});

export default auth


