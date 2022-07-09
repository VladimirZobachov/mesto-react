function PopupWithForm(props){

    const handleClose = props.isClose;

    if(props.isOpen){
        return(
            <div className={`popup popup_type_${props.name} popup_opened`} >
                <div className={`popup__content-${props.name}`}>
                    <button aria-label="Close" type="button"
                            className="popup__close-button" onClick={handleClose}></button>
                    <h2 className="popup__header">{props.title}</h2>
                    <form className={`popup__form popup__form-${props.name}`} name={props.name}>
                        {props.children}
                        <button aria-label="saveForm" type="submit" className="popup__button">{props.titleButton}</button>
                    </form>
                </div>
            </div>
        );
    }
    else {
        return(
            <div className={`popup popup_type_${props.name}`} >
                <div className={`popup__content-${props.name}`}>
                    <button aria-label="Close" type="button"
                            className="popup__close-button"></button>
                    <h2 className="popup__header">{props.title}</h2>
                    <form className={`popup__form popup__form-${props.name}`} name={props.name}>
                        {props.children}
                        <button aria-label="saveForm" type="submit" className="popup__button">{props.titleButton}</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default PopupWithForm;