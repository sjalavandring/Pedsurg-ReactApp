import {Header, Main, Footer, Directions, Publications} from '../../index.js';
import MediaQuery from 'react-responsive';
// import {useState} from 'react'
import React, { useLayoutEffect, useState } from 'react';

function CardsList(props) {
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
		props.setChildProps(props.cardsInfo[id]);
		if ((item.id % 2 == 1) || (innerWidth < 991)) {
			let test1 = props.cardsInfo[id];
			return (
				<div className="cards-list-elem" key={id}>
					<CardsListImage cardsInfo={props.cardsInfo[id]}/>
					<CardsListDescript cardsInfo={props.cardsInfo[id]}/>
					{props.children}
				</div>
			) 
		} else 
		if (item.id % 2 == 0)  {
			let test2 = props.cardsInfo[id];
			return (
				<div className="cards-list-elem" key={id}>
					<CardsListDescript cardsInfo={props.cardsInfo[id]}/>
					<CardsListImage cardsInfo={props.cardsInfo[id]}/>
					{props.children}
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

// function CardsListRight (props) {
	
// }

export default CardsList;