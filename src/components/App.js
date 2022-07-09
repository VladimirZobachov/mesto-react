import {useState} from "react";
import Header from './Header';
import Main from './Main';
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupWithImage from "./PopupWithImage";
import '../App.css';

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

    const closeAllPopups = ()=>{
        setEditAvatar(false);
        setEditProfile(false);
        setAddPlace(false);
    }

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);

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
      />

      <Footer/>

      <PopupWithForm title="Редактировать профиль" name="edit" titleButton="Сохранить" isOpen={isEditProfilePopupOpen} isClose={closeAllPopups}>
                  <input type="text" className="popup__input popup__input_type_name" placeholder="Имя" name="name" id="name"
                         required minLength="2" maxLength="40"/>
                  <span className="popup__error-message popup__error-message_name"></span>
                  <input type="text" className="popup__input popup__input_type_major" placeholder="Призвание" name="major"
                         id="major" required minLength="2" maxLength="200"/>
                  <span className="popup__error-message popup__error-message_major"></span>
      </PopupWithForm>

      <PopupWithForm title="Обновить аватар" name="edit-avatar" titleButton="Сохранить" isOpen={isEditAvatarPopupOpen} isClose={closeAllPopups}>
          <input type="url" className="popup__input popup__input_type_avatar" placeholder="ссылка на аватар"
                 name="avatar" id="avatar" required minLength="2" maxLength="200"/>
          <span className="popup__error-message popup__error-message_avatar"></span>
      </PopupWithForm>

      <PopupWithForm title="Новое место" name="new-card" titleButton="Сохранить" isOpen={isAddPlacePopupOpen} isClose={closeAllPopups}>
          <input type="text" className="popup__input popup__input_type_title" placeholder="Название" name="title"
                 id="title" required minLength="2" maxLength="30"/>
          <span className="popup__error-message popup__error-message_title"></span>
          <input type="url" className="popup__input popup__input_type_img" placeholder="Ссылка на картинку"
                 name="img" id="img" required/>
          <span className="popup__error-message popup__error-message_img"></span>
      </PopupWithForm>

      <PopupWithImage/>

      <div className="popup popup_type_del-card">
        <div className="popup__content-del-card">
          <button aria-label="Close" type="button"
                  className="popup__close-button popup__close-button_type_img"></button>
          <h2 className="popup__header">Вы уверены?</h2>
          <form className="popup__form popup__form-card" name="popup-form">
            <button aria-label="saveForm" type="submit" className="popup__button">Да</button>
          </form>
        </div>
      </div>
      <template className="template__card">
        <li className="gallery__item">
          <button arria-lable="Del" type="button" className="gallery__del-button"></button>
          <img className="gallery__img" alt=""/>
            <div className="gallery__item-info">
              <h2 className="gallery__item-title"></h2>
              <div className="gallery__likes">
                <button aria-label="Like" type="button" className="gallery__like"></button>
                <span className="gallery__like-count">1</span>
              </div>
            </div>
        </li>
      </template>

      </>
  );
}

export default App;
