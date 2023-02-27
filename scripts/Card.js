class Card {
    constructor(data, template) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
    }

    _addVisibility() {
      this._popupOpenImage = document.querySelector(".popup_open-image");
      this._popupImage = this._popupOpenImage.querySelector(".popup__image");
      this._popupCaption = this._popupOpenImage.querySelector(".popup__caption");
      this._popupOpenImage.classList.add("popup_opened");
      this._popupImage.src = this._link;
      this._popupCaption.textContent = this._name;
      this._popupImage.alt = this._name;
    };

   _removeVisibility() {
      this._popupOpenImage.classList.remove("popup_opened");
      document.removeEventListener("keydown", (event) => this._closePopupByEscButton(event));
    };

    _handleLikeButtonKlick() {
      this._likeButton.classList.toggle("photo-grid__heart-button_active");
    };

    _removeElement(element) {
      element.remove();
    };

    _closePopupByEscButton(event) {
      // this._openedPopup = document.querySelector('.popup_opened');
      if (event.key === "Escape") {
        this._removeVisibility();
      }
    };

    _addEventListeners() {
      this._cardPic.addEventListener("click", () => this._addVisibility());

      this._likeButton.addEventListener("click", () => this._handleLikeButtonKlick());

      this._deleteButton.addEventListener("click", () => this._removeElement(this._card));

      document.addEventListener("keydown", (event) => this._closePopupByEscButton(event));

    }


    createCard() {
        this._card = this._template.content
          .querySelector(".photo-grid__card")
          .cloneNode(true);
        this._cardPic = this._card.querySelector(".photo-grid__image");
        this._card.querySelector(".photo-grid__text").textContent = this._name;
        this._cardPic.src = this._link;
        this._cardPic.alt = this._name;
        this._likeButton = this._card.querySelector(".photo-grid__heart-button");
        this._deleteButton = this._card.querySelector(".photo-grid__card_delete-button");
        
        this._addEventListeners();
      
        return this._card;
      };
}

export default Card;