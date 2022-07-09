function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }
    return(
        <li className="gallery__item">
            <button arria-lable="Del" type="button" className="gallery__del-button"/>
            <img className="gallery__img" alt={props.card.link} src={props.card.link} onClick={handleClick}/>
            <div className="gallery__item-info">
                <h2 className="gallery__item-title">{props.card.name}</h2>
                <div className="gallery__likes">
                    <button aria-label="Like" type="button" className="gallery__like"/>
                    <span className="gallery__like-count">{props.card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;