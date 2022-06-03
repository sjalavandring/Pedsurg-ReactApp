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

function CardsListDropdown(props) {
	let test = props.cardsListProps.name;
	return (
		<div className="dropdown__text">{test}</div>
	)
}


export {CardsListImage, CardsListDescript, CardsListTitle, CardsListDropdown};