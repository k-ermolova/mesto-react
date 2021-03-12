import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Card from './Card.js';

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
			<div className="popup popup_edit">
				<form className="popup__container" name="edit-form" noValidate>
					<button
						className="popup__close-button popup__close-button_position_top"
						type="button"
						aria-label="Закрыть форму"
					></button>
					<h2 className="popup__heading popup__heading_edit">
						Редактировать профиль
				</h2>
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
				</form>
			</div>
			<div className="popup popup_add">
				<form
					className="popup__container popup__container_add"
					name="add-form"
					noValidate
				>
					<button
						className="popup__close-button popup__close-button_position_diagonally"
						type="button"
						aria-label="Закрыть форму"
					></button>
					<h2 className="popup__heading popup__heading_add">Новое место</h2>
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
				</form>
			</div>
			<div className="popup popup_confirm">
				<form name="confirm" className="popup__container popup__container_confirm">
					<button
						className="popup__close-button popup__close-button_position_top"
					></button>
					<h2 className="popup__heading popup__heading_confirm">Вы уверены?</h2>
					<button
						className="popup__save-button popup__save-button_confirm"
						type="submit"
					>
						Да
				</button>
				</form>
			</div>
			<div className="popup popup_update">
				<form name="update-avatar" className="popup__container" noValidate>
					<button
						className="popup__close-button popup__close-button_position_top"
						type="button"
						aria-label="Закрыть форму"
					></button>
					<h2 className="popup__heading popup__heading_update">Обновить аватар</h2>
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
				</form>
			</div>
			<template className="place-template">
				<Card />
			</template>
		</div>
	);
}

export default App;
