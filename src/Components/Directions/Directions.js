import {CardsList, CardsListImage, CardsListDescript, CardsListTitle} from '../../index.js';
import directionsDB from '../../database/DirectionsDB.js'; 
import {useState} from 'react'
//импорт из отдельного файла массива с информацией для CardsList

function Directions() {
	let [directionsListProps, setDirectionsListProps] = useState(directionsDB[0])
	// console.log(typeof(cardsListProps))
	function TeachersEven(props) {
		return (
			<>
				<CardsListImage cardsListProps={directionsListProps}/>
				<div className="cards-list-descript cards-list-inner">
					<CardsListTitle cardsListProps={directionsListProps}/>
					<CardsListDescript cardsListProps={directionsListProps}/>
				</div>	
			</>
		)
	}

	function TeachersOdd(props) {
		return (
			<>
				<div className="cards-list-descript cards-list-inner">
					<CardsListDescript cardsListProps={directionsListProps}/>
				</div>
				<CardsListImage cardsListProps={directionsListProps}/>
			</>
		)
	}
	
	return (
		<main className="main-teachers container">
			<CardsList cardsInfo={directionsDB} even={<TeachersEven/>} odd={<TeachersOdd/>} setCardsListProps={setDirectionsListProps}/>
		</main>	
	)
}

export default Directions;