class Card {
  constructor(data, template) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
  }

  _handleLikeButtonKlick() {
    this._likeButton.classList.toggle("photo-grid__heart-button_active");
  }

  _removeElement(element) {
    element.remove();
  }

  _closePopupByEscButton(event) {
    const openedPopup = document.querySelector(".popup_opened");
    console.log(openedPopup);
    if (event.key === "Escape") {
      this._removeVisibility(openedPopup);
    }
  }

  _addEventListeners() {
    this._likeButton.addEventListener("click", () => this._handleLikeButtonKlick());
    this._deleteButton.addEventListener("click", () => this._removeElement(this._card));
  }

  createCard(onClickHandler) {
    this._card = this._template.content
      .querySelector(".photo-grid__card")
      .cloneNode(true);
    this._cardPic = this._card.querySelector(".photo-grid__image");
    this._card.querySelector(".photo-grid__text").textContent = this._name;
    this._cardPic.src = this._link;
    this._cardPic.alt = this._name;
    this._likeButton = this._card.querySelector(".photo-grid__heart-button");
    this._deleteButton = this._card.querySelector(
      ".photo-grid__card_delete-button"
    );

    this._addEventListeners();
    this._cardPic.addEventListener("click", () => onClickHandler({ link: this._link, name: this._name }));

    return this._card;
  }
}

export default Card;
