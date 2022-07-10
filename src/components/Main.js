import {useState} from "react";
import {useEffect} from "react";
import api from '../utils/api';
import Card from "./Card";

function Main(props) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        api.getUser()
            .then((user)=>{
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
            })
            .catch((err) => {
                console.log(err);
            });

        api.getInitialCards()
            .then((cards)=>{
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    return (
        <>
            <main className="content">
                <section className="profile">
                    <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} >
                        <div className="profile__avatar-edit">
                            <i className="profile__avatar-edit-icon" onClick={props.onEditAvatar}/>
                        </div>
                    </div>
                    <div className="profile__content">
                        <div className="profile__name">
                            <h1 className="profile__title">{userName}</h1>
                            <button aria-label="Edit" type="button" className="profile__edit-button" onClick={props.onEditProfile}/>
                        </div>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                    <button aria-label="Add" type="button" className="profile__add-button" onClick={props.onAddPlace}/>
                </section>
                <section className="gallery">
                    <ul className="gallery__list">
                        {cards.map((item)=>{
                            return(
                                <Card
                                    key={cards.indexOf(item)}
                                    card={item}
                                    onCardClick={props.onCardClick}
                                />
                            )
                        })}
                    </ul>
                </section>
            </main>
        </>
    );
}

export default Main;