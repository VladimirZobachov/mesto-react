import {useState} from "react";
import {useEffect} from "react";
import api from '../utils/api';

function Main(props) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    useEffect(()=>{
        api.getUser()
            .then((res)=>{
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
    })

    return (
        <>
            <main className="content">
                <section className="profile">
                    <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} >
                        <div className="profile__avatar-edit">
                            <i className="profile__avatar-edit-icon" onClick={props.onEditAvatar}></i>
                        </div>
                    </div>
                    <div className="profile__content">
                        <div className="profile__name">
                            <h1 className="profile__title">{userName}</h1>
                            <button aria-label="Edit" type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                    <button aria-label="Add" type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
                </section>
                <section className="gallery">
                    <ul className="gallery__list"></ul>
                </section>
            </main>
        </>
    );
}

export default Main;