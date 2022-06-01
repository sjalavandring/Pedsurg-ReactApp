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
				<div className="cards-list-elem">
					<CardsListImage cardsListProps={directionsListProps}/>
					<div className="cards-list-descript cards-list-inner">
						<CardsListTitle cardsListProps={directionsListProps}/>
						<CardsListDescript cardsListProps={directionsListProps}/>
					</div>	
				</div>
				<div className="cards-list-">asd</div>
			</>
		)
	}

	function TeachersOdd(props) {
		return (
			<>
				<div className="cards-list-">asd</div>	
				<div className="cards-list-elem">
					<div className="cards-list-descript cards-list-inner">
						<CardsListDescript cardsListProps={directionsListProps}/>
					</div>
					<CardsListImage cardsListProps={directionsListProps}/>
				</div>
			</>
		)
	}
	
	return (
		<main className="main-directions container">
			<CardsList cardsInfo={directionsDB} even={<TeachersEven/>} odd={<TeachersOdd/>} setCardsListProps={setDirectionsListProps}/>
		</main>	
	)
}

export default Directions;