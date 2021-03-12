function Card() {
  return(
    <li className="place">
    <button
      type="button"
      className="place__delete-button"
      aria-label="Удалить"
    ></button>
    <img
      src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
      alt=" "
      className="place__image"
    />
    <div className="place__description">
      <h3 className="place__title">Архыз</h3>
      <div className="place__like">
        <button
          type="button"
          className="place__like-button"
          aria-label="Понравилось"
        ></button>
        <span className="place__like-counter">1</span>
      </div>
    </div>
  </li>
  )
}

export default Card;