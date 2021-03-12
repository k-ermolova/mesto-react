import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js'
import Card from './Card.js';
import { useState } from 'react';

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
	}

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}

	function closeAllPopups() {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
	}

	return (
		<div className="App">
			<Header />
			<Main
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
				onEditAvatar={handleEditAvatarClick}
			/>
			<Footer />

			<PopupWithForm
				title="Редактировать профиль"
				name="popup_edit"
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopups}
			>
				<fieldset className="popup__info">
					<input
						type="text"
						className="input-text input-text_type_name popup__name"
						placeholder="Имя"
						name="name"
						required
						minLength="2"
						maxLength="40"
					/>
					<span id="name-error" className="popup__error"></span>
					<input
						type="text"
						className="input-text input-text_type_job popup__job"
						placeholder="О себе"
						name="about"
						required
						minLength="2"
						maxLength="200"
					/>
					<span id="about-error" className="popup__error"></span>
				</fieldset>
				<button className="popup__save-button" type="submit">Сохранить</button>
			</PopupWithForm>

			<PopupWithForm
				title="Новое место"
				name="popup_add"
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopups}
			>
				<fieldset className="popup__info">
					<input
						type="text"
						className="input-text input-text_type_heading popup__name"
						placeholder="Название"
						name="place-name"
						required
						minLength="1"
						maxLength="30"
					/>
					<span id="place-name-error" className="popup__error"></span>
					<input
						type="url"
						className="input-text input-text_type_link popup__link"
						placeholder="Ссылка на картинку"
						name="link"
						required
					/>
					<span id="link-error" className="popup__error"></span>
				</fieldset>
				<button className="popup__save-button" type="submit">Создать</button>
			</PopupWithForm>

			<PopupWithForm
				title="Обновить аватар"
				name="popup_update"
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}
			>
				<fieldset className="popup__info">
					<input
						type="url"
						className="input-text input-text_type_link popup__link"
						placeholder="Ссылка на картинку"
						name="avatar-link"
						required
					/>
					<span id="avatar-link-error" className="popup__error"></span>
				</fieldset>
				<button
					className="popup__save-button popup__save-button_update"
					type="submit"
				>
					Сохранить
				</button>
			</PopupWithForm>

			<PopupWithForm
				title="Вы уверены?"
				name="popup_confirm"
			>
				<button
					className="popup__save-button popup__save-button_confirm"
					type="submit"
				>
					Да
				</button>
			</PopupWithForm>

			<template className="place-template">
				<Card />
			</template>

			<ImagePopup />
		</div>
	);
}

export default App;
