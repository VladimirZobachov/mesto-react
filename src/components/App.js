import {useState} from "react";
import Header from './Header';
import Main from './Main';
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const handleEditAvatarClick = ()=>{
        setEditAvatar(true);
    }

    const handleEditProfileClick = ()=>{
        setEditProfile(true);
    }

    const handleAddPlaceClick = ()=>{
        setAddPlace(true);
    }

    const handleCardClick = (card)=>{
        setSelectedCard(card);
    }

    const closeAllPopups = ()=>{
        setEditAvatar(false);
        setEditProfile(false);
        setAddPlace(false);
        setSelectedCard('');
    }

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState('');

    function setEditProfile(value){
        setEditProfilePopupOpen(value);
    }

    function setAddPlace(value){
        setAddPlacePopupOpen(value);
    }

    function setEditAvatar(value){
        setEditAvatarPopupOpen(value);
    }

  return (
      <>

      <Header/>

      <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
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

      <div className="popup popup_type_del-card">
        <div className="popup__content-del-card">
          <button aria-label="Close" type="button"
                  className="popup__close-button popup__close-button_type_img"/>
          <h2 className="popup__header">Вы уверены?</h2>
          <form className="popup__form popup__form-card" name="popup-form">
            <button aria-label="saveForm" type="submit" className="popup__button">Да</button>
          </form>
        </div>
      </div>

      </>
  );
}

export default App;
