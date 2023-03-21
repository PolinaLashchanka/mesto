export default class UserInfo {
  constructor({ name, description }) {
    this._name = document.querySelector(name);
    this._description = document.querySelector(description);
  }

  getUserInfo() {
    const user = {};
    user.userName = this._name.textContent;
    user.userDescription = this._description.textContent;
    return user;
  }

  setUserInfo({ userName, userDescription }) {
    this._name.textContent = userName;
    this._description.textContent = userDescription;
  }
}
