function ImagePopup() {
  return(
    <div className="popup figure-popup">
			<figure className="popup__figure">
				<button
					className="popup__close-button popup__close-button_position_diagonally"
					type="button"
					aria-label="Закрыть форму"
				></button>
				<img
					src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
					alt=" "
					className="popup__image"
				/>
				<figcaption className="popup__description">Архыз</figcaption>
			</figure>
		</div>
  )
}

export default ImagePopup;