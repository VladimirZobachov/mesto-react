function Main(props) {

    return (
        <>
            <main className="content">
                <section className="profile">
                    <div className="profile__avatar">
                        <div className="profile__avatar-edit">
                            <i className="profile__avatar-edit-icon" onClick={props.onEditAvatar}></i>
                        </div>
                    </div>
                    <div className="profile__content">
                        <div className="profile__name">
                            <h1 className="profile__title"></h1>
                            <button aria-label="Edit" type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                        </div>
                        <p className="profile__subtitle"></p>
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