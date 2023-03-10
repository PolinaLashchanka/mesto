class Card {
  constructor(data, templateSelector, onClickHandler) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._onClickHandler = onClickHandler;
  }

  _generateCard() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".photo-grid__card")
      .cloneNode(true);
  }

  _handleLikeButtonKlick() {
    this._likeButton.classList.toggle("photo-grid__heart-button_active");
  }

  _removeElement(element) {
    element.remove();
  }

  _addEventListeners() {
    this._likeButton.addEventListener("click", () =>
      this._handleLikeButtonKlick()
    );
    this._deleteButton.addEventListener("click", () =>
      this._removeElement(this._card)
    );
    this._cardPic.addEventListener("click", () =>
      this._onClickHandler({ link: this._link, name: this._name })
    );
  }

  createCard() {
    this._card = this._generateCard();
    this._cardPic = this._card.querySelector(".photo-grid__image");
    this._card.querySelector(".photo-grid__text").textContent = this._name;
    this._cardPic.src = this._link;
    this._cardPic.alt = this._name;
    this._likeButton = this._card.querySelector(".photo-grid__heart-button");
    this._deleteButton = this._card.querySelector(
      ".photo-grid__card_delete-button"
    );

    this._addEventListeners();

    return this._card;
  }
}

export default Card;
