// import logo from "../../img/DirectionsCardsList/youtube_cont.png"

function CardList(props) {
	let cardsListInfo = props.dirInfo.map((item, id) => {
		if (item.id % 2 == 1)
		return (
			<div className="cards-list__item">
				<CardsListImage dirInfo={props.dirInfo[id]}/>
				<CardsListDescript dirInfo={props.dirInfo[id]}/>
			</div>
		)
	
		if (item.id % 2 == 0)  
		return (
			<div className="cards-list__item">
				<CardsListDescript dirInfo={props.dirInfo[id]}/>
				<CardsListImage dirInfo={props.dirInfo[id]}/>
			</div>
		)
		
	})
	return (
		<div className="cards-list">
			{cardsListInfo}
		</div>
	)
}

function CardsListImage (props) {
	return (
		<div className="cards-list__image">
			<img src={props.dirInfo.link} alt="illustration" width="350px"/>	
		</div>	
	)
}

function CardsListDescript (props) {
	return (
		<div className="cards-list__descript">
			<p>{props.dirInfo.text}</p>
		</div>
	)
}

export default CardList;