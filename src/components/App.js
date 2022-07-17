import {useEffect, useState} from "react";
import Header from './Header';
import Main from './Main';
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isDelPlacePopupOpen, setIsDelPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({name: '', link: ''});
    const [currentUser, setCurrentUser] = useState('');

    useEffect(()=>{
        api.getUser()
            .then((user)=>{
                setCurrentUser(user);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])

    const handleEditAvatarClick = ()=>{
        setEditAvatar(true);

    }
    const handleEditProfileClick = ()=>{
        setEditProfile(true);

    }
    const handleAddPlaceClick = ()=>{
        setAddPlace(true);

    }
    const handleDelPlaceClick = ()=>{
        setDelPlace(true);

    }
    const handleCardClick = (card)=>{
        setSelectedCard(card);

    }
    const closeAllPopups = ()=>{
        setEditAvatar(false);
        setEditProfile(false);
        setAddPlace(false);
        setSelectedCard({name: '', link: ''});

    }

    function setEditProfile(value){
        setIsEditProfilePopupOpen(value);
    }

    function setAddPlace(value){
        setIsAddPlacePopupOpen(value);
    }

    function setDelPlace(value){
        setIsDelPlacePopupOpen(value);
    }

    function setEditAvatar(value){
        setIsEditAvatarPopupOpen(value);
    }

  return (
      <CurrentUserContext.Provider value={currentUser}>
      <>
      <Header/>

      <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onDelPlace={handleDelPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
      />

      <Footer/>

      <PopupWithForm title="Редактировать профиль" name="edit" titleButton="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                  <input type="text" className="popup__input popup__input_type_name" placeholder="Имя" name="name" id="name"
                         required minLength="2" maxLength="40"/>
                  <span className="popup__error-message popup__error-message_name"/>
                  <input type="text" className="popup__input popup__input_type_major" placeholder="Призвание" name="major"
                         id="major" required minLength="2" maxLength="200"/>
                  <span className="popup__error-message popup__error-message_major"/>
      </PopupWithForm>

      <PopupWithForm title="Обновить аватар" name="edit-avatar" titleButton="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input type="url" className="popup__input popup__input_type_avatar" placeholder="ссылка на аватар"
                 name="avatar" id="avatar" required minLength="2" maxLength="200"/>
          <span className="popup__error-message popup__error-message_avatar"/>
      </PopupWithForm>

      <PopupWithForm title="Новое место" name="new-card" titleButton="Сохранить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input type="text" className="popup__input popup__input_type_title" placeholder="Название" name="title"
                 id="title" required minLength="2" maxLength="30"/>
          <span className="popup__error-message popup__error-message_title"/>
          <input type="url" className="popup__input popup__input_type_img" placeholder="Ссылка на картинку"
                 name="img" id="img" required/>
          <span className="popup__error-message popup__error-message_img"/>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

      <PopupWithForm title="Вы уверены?" name="del-card" titleButton="Да" isOpen={isDelPlacePopupOpen} onClose={closeAllPopups}/>

      </>
      </CurrentUserContext.Provider>
  );
}

export default App;
