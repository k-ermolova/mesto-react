import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js'
import { useEffect, useState } from 'react';
import api from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState(null);

	const [currentUser, setCurrentUser] = useState([]);

	useEffect(() => {
		api
			.getUserInfo()
			.then((userData) => {
				setCurrentUser(userData);
			})
			.catch(err => console.log(err));
	}, [])

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
	}

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}

	function handleCardClick(card) {
		setSelectedCard(card);
	}

	function handleUpdateUser(user) {
		api
			.updateUserInfo(user)
			.then((userData) => setCurrentUser(userData))
			.catch(err => console.log(err));

		closeAllPopups();
	}

	function closeAllPopups() {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setSelectedCard(null);
	}

	return (
		<div className="App">
			<CurrentUserContext.Provider value={currentUser}>
				<Header />
				<Main
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
					onCardClick={handleCardClick}
				/>
				<Footer />

				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>

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

				<ImagePopup card={selectedCard} onClose={closeAllPopups} />
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
