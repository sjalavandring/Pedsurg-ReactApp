function CardsListImage (props) {
	return (
		<img className="cards-list-image cards-list-inner" src={props.cardsListProps.link} alt="illustration"/>	
	)
}

function CardsListDescript (props) {
	return (
		<p className="cards-list-inner cards-list-text">{props.cardsListProps.text}</p>
	)
}

function CardsListTitle(props) {
	return (
		<h4 className="cards-list-inner cards-list-title">{props.cardsListProps.title}</h4>
	)
}


export {CardsListImage, CardsListDescript, CardsListTitle};