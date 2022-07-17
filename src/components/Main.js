import {useContext, useState} from "react";
import {useEffect} from "react";
import api from '../utils/api';
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {

    const [cards, setCards] = useState([]);
    const currentUser = useContext(CurrentUserContext);

    useEffect(()=>{

        api.getInitialCards()
            .then((cards)=>{
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    return (
            <main className="content">
                <section className="profile">
                    <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} >
                        <div className="profile__avatar-edit">
                            <i className="profile__avatar-edit-icon" onClick={props.onEditAvatar}/>
                        </div>
                    </div>
                    <div className="profile__content">
                        <div className="profile__name">
                            <h1 className="profile__title">{currentUser.name}</h1>
                            <button aria-label="Edit" type="button" className="profile__edit-button" onClick={props.onEditProfile}/>
                        </div>
                        <p className="profile__subtitle">{currentUser.about}</p>
                    </div>
                    <button aria-label="Add" type="button" className="profile__add-button" onClick={props.onAddPlace}/>
                </section>
                <section className="gallery">
                    <ul className="gallery__list">
                        {cards.map((item)=>{
                            return(
                                <Card
                                    key={item._id}
                                    card={item}
                                    onCardClick={props.onCardClick}
                                    onDelClick={props.onDelPlace}
                                    onCardLike={handleCardLike}
                                />
                            )
                        })}
                    </ul>
                </section>
            </main>
    );
}

export default Main;