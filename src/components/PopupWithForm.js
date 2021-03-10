function PopupWithForm(props) {
  return(
    <div className="popup">
    <form className={`popup__container popup_${props.name}`} name={`${props.name}`} noValidate>
      <button
        className="popup__close-button"
        type="button"
        aria-label="Закрыть форму"
      ></button>
      <h2 className="popup__heading">
      </h2>
      <button className="popup__save-button" type="submit"></button>
    </form>
  </div>
  )
}