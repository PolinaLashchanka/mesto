class Card {
  constructor(data, templateSelector, handleCardClick, handleCardRemove, api) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._owner = data.owner;
    this._cardId = data._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardRemove = handleCardRemove;
    this._api = api;
  }

  _generateCard() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".photo-grid__card")
      .cloneNode(true);
  }

  _handleLikeButtonClick() {
    if (
      this._likeButton.classList.contains("photo-grid__heart-button_active")
    ) {
      this._api.deleteLike(this._cardId).then((res) => {
        this._likeButton.classList.remove("photo-grid__heart-button_active");
        this._likeCount.textContent = res.likes.length;
      }).catch((err) => console.log(err));
    } else {
      this._api.putLike(this._cardId).then((res) => {
        this._likeButton.classList.add("photo-grid__heart-button_active");
        this._likeCount.textContent = res.likes.length;
      }).catch((err) => console.log(err));
    }
  }

  _addEventListeners() {
    this._likeButton.addEventListener("click", () =>
      this._handleLikeButtonClick()
    );
    this._deleteButton.addEventListener("click", () =>
      this._handleCardRemove(this._cardId, this._card)
    );
    this._cardPic.addEventListener("click", () =>
      this._handleCardClick({ link: this._link, name: this._name })
    );
  }

  createCard(userInfo) {
    this._card = this._generateCard();
    this._cardPic = this._card.querySelector(".photo-grid__image");
    this._card.querySelector(".photo-grid__text").textContent = this._name;
    this._cardPic.src = this._link;
    this._cardPic.alt = this._name;
    this._likeSection = this._card.querySelector(".photo-grid__heart-section");
    this._likeButton = this._likeSection.querySelector(".photo-grid__heart-button");
    this._likeCount = this._likeSection.querySelector(".photo-grid__heart-count");
    this._likeCount.textContent = this._data.likes.length;
    this._deleteButton = this._card.querySelector(
      ".photo-grid__card_delete-button"
    );
    if (userInfo.id !== this._owner._id) {
      this._deleteButton.classList.add("photo-grid__card_delete-button-hidden");
    }
    this._data.likes.forEach((item) => {
      if(item._id === userInfo.id) {
        this._likeButton.classList.add("photo-grid__heart-button_active");
      }
    })

    this._addEventListeners();

    return this._card;
  }
}

export default Card;
