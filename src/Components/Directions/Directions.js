import {CardsList} from '../../index.js';
import directionsDB from '../../database/TeachersDB.js'; 
import {useState} from 'react';
//импорт из отдельного файла массива с информацией для CardsList

function Directions() {
	let [childProps, setChildProps] = useState(null);
	function changeProps(value) {
		return setChildProps(value)
	}

	return (
		<main className="main-directions container">
			<CardsList cardsInfo={directionsDB} setChildProps={changeProps}>
				<CardsListTitle cardsInfo={childProps}/>
			</CardsList>
		</main>	
	)
}

function CardsListTitle (props) {
	return (
		<div className="cards-list__descript cards-list__item">
			{props.cardsInfo.title}
		</div>
	)
}

export default Directions;