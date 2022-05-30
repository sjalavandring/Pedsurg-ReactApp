import {CardsList, CardsListImage, CardsListDescript, CardsListTitle} from '../../index.js';
import teachersDB from '../../database/TeachersDB.js'; 
import {useState} from 'react'

function Teachers() {
	let [cardsListProps, setCardsListProps] = useState(teachersDB[0])
	// console.log(typeof(cardsListProps))
	function TeachersEven(props) {
		return (
			<>
				<CardsListImage cardsListProps={cardsListProps}/>
				<div className="cards-list-descript cards-list-inner">
					<CardsListTitle cardsListProps={cardsListProps}/>
					<CardsListDescript cardsListProps={cardsListProps}/>
				</div>	
			</>
		)
	}

	function TeachersOdd(props) {
		return (
			<>
				<div className="cards-list-descript cards-list-inner">
					<CardsListTitle cardsListProps={cardsListProps}/>
					<CardsListDescript cardsListProps={cardsListProps}/>
				</div>
				<CardsListImage cardsListProps={cardsListProps}/>
			</>
		)
	}
	
	return (
		<main className="main-teachers container">
			<CardsList cardsInfo={teachersDB} even={<TeachersEven/>} odd={<TeachersOdd/>} setCardsListProps={setCardsListProps}/>
		</main>	
	)
}

export default Teachers;