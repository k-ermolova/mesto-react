import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import api from '../utils/api.js';
import Card from './Card.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
	const currentUser = useContext(CurrentUserContext);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		api
			.getInitialCards()
			.then(cards => setCards(cards))
			.catch(err => console.log(err));
	}, []);

	function handleCardLike(card) {
		const isLiked = card.likes.some(i => i._id === currentUser._id);
		if (!isLiked) {
			api
				.putLike(card._id, !isLiked)
				.then((newCard) => {
					setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
				})
				.catch(err => console.log(err));
		} else {
			api
				.deleteLike(card._id, !isLiked)
				.then((newCard) => {
					setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
				})
				.catch(err => console.log(err));
		}

	}

	function handleCardDelete(card) {
		api
			.deleteCard(card._id)
			.then(
				setCards(() => cards.filter(c => c._id !== card._id)))
			.catch(err => console.log(err));
	}

	return (
		<main className="content">
			<section className="profile content__profile">
				<div className="profile__container">
					<div className="profile__avatar-area" onClick={onEditAvatar}>
						<img
							className="profile__avatar"
							src={currentUser.avatar}
							alt="Фотография профиля."
						/>
					</div>
					<div className="profile__info">
						<h1 className="profile__title">{currentUser.name}</h1>
						<p className="profile__subtitle">{currentUser.about}</p>
						<button
							className="profile__edit-button"
							type="button"
							aria-label="Редактировать профиль"
							onClick={onEditProfile}
						></button>
					</div>
				</div>
				<button
					type="button"
					className="profile__add-button"
					aria-label="Добавить публикацию"
					onClick={onAddPlace}
				></button>
			</section>
			<section className="places content__places">
				<ul className="places__list">
					{cards.map(card => (<Card
						key={card._id}
						card={card}
						onCardClick={onCardClick}
						onCardLike={handleCardLike}
						onCardDelete={handleCardDelete} />)
					)}
				</ul>
			</section>
		</main>
	);
}

export default Main;