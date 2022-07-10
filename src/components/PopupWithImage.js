function PopupWithImage(props) {
    const handleClose = props.onClose;

    if(props.card){
        return(
            <div className="popup popup_type_image popup_opened">
                <div className="popup__content-img">
                    <button aria-label="Close" type="button"
                            className="popup__close-button popup__close-button_type_img" onClick={handleClose}/>
                    <img className="popup__gallery-img" alt={props.card.name} src={props.card.link}/>
                    <h2 className="popup__title-img">{props.card.name}</h2>
                </div>
            </div>
        );
    }else{
        return(
            <div className="popup popup_type_image">
                <div className="popup__content-img">
                    <button aria-label="Close" type="button"
                            className="popup__close-button popup__close-button_type_img"/>
                    <img className="popup__gallery-img" alt=""/>
                    <h2 className="popup__title-img">{props.card.name}</h2>
                </div>
            </div>
        );
    }

}

export default PopupWithImage;