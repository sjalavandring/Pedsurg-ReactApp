import {Header, Main, Footer, Directions, Publications} from '../../index.js';
import MediaQuery from 'react-responsive';
import React, { useLayoutEffect, useState, useEffect, useMemo } from 'react';

function CardList(props) {
	/*В пропсы CardsKist передается cardsInfo - массив с данными для заполнения компонентов, четный и нечетный компоненты even и odd , 
	а также метод setCardsListProps, который меняет внутреннее состояние компонентов, которые встраиваются в CardsList
	*/
	function useInnerWidth () {
		let [width, setWidth] = useState(window.innerWidth);
		useLayoutEffect(() => {
			window.addEventListener('resize', () => setWidth(window.innerWidth));
		}, [])
		return width;
	}
	// Функция useInnerWidth возвращает динамически меняющуюся ширину экрана, под которую подстраивается рендер компонента 

	let innerWidth = useInnerWidth();
	let cardsListInfo = props.cardsInfo.map((item, id) => {	
		console.log(props.directionsListProps, props.cardsInfo[id]);
		props.setCardsListProps(props.cardsInfo[id]);
		if ((item.id % 2 == 1) || (innerWidth < 991)) {
			return (
				<div className="cards-list-container" key={id}>
					{props.even}
				</div>
			) 
		} else 
		if (item.id % 2 == 0)  {
			return (
				<div className="cards-list-container" key={id}>
					{props.odd}
				</div>
			)
		}	
	})

	return (
		<div className="cards-list">
			{cardsListInfo}
		</div>
	)
}

export default CardList;