import {Header, Main, Footer, Directions, Publications} from '../../index.js';
import MediaQuery from 'react-responsive';
import {useState} from 'react'

function CardList(props) {
	let [innerWidth, setInnerWidth] = useState(window.screen.availWidth);
	let cardsListInfo = props.cardsInfo.map((item, id) => {
		if ((item.id % 2 == 1) || (innerWidth < 991)) {
			return (
				<div className="cards-list__item">
					<CardsListImage cardsInfo={props.cardsInfo[id]}/>
					<CardsListDescript cardsInfo={props.cardsInfo[id]}/>
				</div>
			) 
		} else 
		if (item.id % 2 == 0)  {
			return (
				<div className="cards-list__item">
					<CardsListDescript cardsInfo={props.cardsInfo[id]}/>
					<CardsListImage cardsInfo={props.cardsInfo[id]}/>
				</div>
			)
		}		
	})
	return (
		<div className="cards-list" onResize={() => setInnerWidth(window.screen.availWidth)}>
			{cardsListInfo}
		</div>
	)
}

function CardsListImage (props) {
	return (
		<img className="cards-list__image" src={props.cardsInfo.link} alt="illustration" width="350px"/>	
	)
}

function CardsListDescript (props) {
	return (
		<div className="cards-list__descript">
			{props.cardsInfo.text}
		</div>
	)
}

export default CardList;