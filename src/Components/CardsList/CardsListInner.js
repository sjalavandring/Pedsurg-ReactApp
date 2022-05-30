function CardsListImage (props) {
	return (
		<img className="cards-list-image cards-list-inner" src={props.cardsListProps.link} alt="illustration"/>	
	)
}

function CardsListDescript (props) {
	return (
		<p className="cards-list-inner">{props.cardsListProps.text}</p>
	)
}

function CardsListTitle(props) {
	return (
		<strong className="cards-list-inner">{props.cardsListProps.title}</strong>
	)
}


export {CardsListImage, CardsListDescript, CardsListTitle};