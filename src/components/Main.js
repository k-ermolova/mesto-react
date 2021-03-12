import profileAvatar from '../images/profile__avatar.jpg';
import api from '../utils/api.js';

function Main({handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick}) {
  return (
		<main className="content">
			<section className="profile content__profile">
				<div className="profile__container">
					<div className="profile__avatar-area" onClick={handleEditAvatarClick}>
						<img
							className="profile__avatar"
							src={profileAvatar}
							alt="Фотография профиля."
						/>
					</div>
					<div className="profile__info">
						<h1 className="profile__title">Жак-Ив Кусто</h1>
						<p className="profile__subtitle">Исследователь океана</p>
						<button
							className="profile__edit-button"
							type="button"
							aria-label="Редактировать профиль"
							onClick={handleEditProfileClick}
						></button>
					</div>
				</div>
				<button
					type="button"
					className="profile__add-button"
					aria-label="Добавить публикацию"
					onClick={handleAddPlaceClick}
				></button>
			</section>
			<section className="places content__places">
				<ul className="places__list"></ul>
			</section>
		</main>
  );
}

export default Main;