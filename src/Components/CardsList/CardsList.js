import {Header, Main, Footer, Directions, Publications} from '../../index.js';

function CardList(props) {
	let cardsListInfo = props.cardsInfo.map((item, id) => {
		if (item.id % 2 == 1)
		return (
			<div className="cards-list__item">
				<CardsListImage cardsInfo={props.cardsInfo[id]}/>
				<CardsListDescript cardsInfo={props.cardsInfo[id]}/>
			</div>
		)
	
		if (item.id % 2 == 0)  
		return (
			<div className="cards-list__item">
				<CardsListDescript cardsInfo={props.cardsInfo[id]}/>
				<CardsListImage cardsInfo={props.cardsInfo[id]}/>
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
			<img src={props.cardsInfo.link} alt="illustration" width="350px"/>	
		</div>	
	)
}

function CardsListDescript (props) {
	return (
		<div className="cards-list__descript">
			<p>{props.cardsInfo.text}</p>
		</div>
	)
}

export default CardList;