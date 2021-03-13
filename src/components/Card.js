function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  } 

  return (
    <li className="place">
      <button
        type="button"
        className="place__delete-button"
        aria-label="Удалить"
      ></button>
      <img
        src={props.card.link}
        alt={props.card.name}
        className="place__image"
        onClick={handleClick}
      />
      <div className="place__description">
        <h3 className="place__title">{props.card.name}</h3>
        <div className="place__like">
          <button
            type="button"
            className="place__like-button"
            aria-label="Понравилось"
          ></button>
          <span className="place__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;