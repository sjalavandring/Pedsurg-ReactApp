import {Header, Main, Footer, Directions, Publications, DirectionsContext} from '../../index.js';
import React, { useLayoutEffect, useState,} from 'react';


function CardList(props) {
	/*В пропсы CardsList передается cardsListInfo - все компонеты, для  вставки в CardsList*/

	return (
		<div className="cards-list">
			{props.cardsListInfo}
		</div>
	)
}

export default CardList;