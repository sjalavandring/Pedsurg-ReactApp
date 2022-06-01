import {Header, Main, Footer, Directions, Publications} from '../../index.js';
import MediaQuery from 'react-responsive';
// import {useState} from 'react'
import React, { useLayoutEffect, useState } from 'react';

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
		props.setCardsListProps(props.cardsInfo[id])
		console.log(props.cardsInfo[id])
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

function CardsListImage (props) {
	return (
		<img className="cards-list__image cards-list__item" src={props.cardsInfo.link} alt="illustration"/>	
	)
}

function CardsListDescript (props) {
	return (
		<div className="cards-list__descript cards-list__item">
			{props.cardsInfo.text}

		</div>
	)
}

export default CardList;