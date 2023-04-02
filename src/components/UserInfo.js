export default class UserInfo {
  constructor({ name, description, avatar }) {
    this._name = document.querySelector(name);
    this._description = document.querySelector(description);
    this._avatar = document.querySelector(avatar);
  }

  getUserInfo() {
    const user = {};
    user.userName = this._name.textContent;
    user.userDescription = this._description.textContent;
    user.id = this._id;
    return user;
  }

  setUserInfo({ name, about, avatar, _id }) {
    this._name.textContent = name;
    this._description.textContent = about;
    this._avatar.src = avatar;
    this._id = _id;
  }
}
