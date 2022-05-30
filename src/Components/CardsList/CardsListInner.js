function CardsListImage (props) {
	return (
		<img className="cards-list-image cards-list-inner" src={props.cardsInfo.link} alt="illustration"/>	
	)
}

function CardsListDescript (props) {
	return (
		<div className="cards-list-descript cards-list-inner">
			{props.cardsInfo.text}
		</div>
	)
}

export {CardsListImage, CardsListDescript};