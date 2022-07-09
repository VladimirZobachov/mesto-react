function PopupWithImage() {

    return(
        <div className="popup popup_type_image">
            <div className="popup__content-img">
                <button aria-label="Close" type="button"
                        className="popup__close-button popup__close-button_type_img"></button>
                <img className="popup__gallery-img" alt=""/>
                <h2 className="popup__title-img"></h2>
            </div>
        </div>
    );
}

export default PopupWithImage;