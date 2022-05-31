import {CardsList, CardsListImage, CardsListDescript, CardsListTitle} from '../../index.js';
import teachersDB from '../../database/TeachersDB.js'; 
import {useState} from 'react'

function Teachers() {
	let [teachersListProps, setTeachersListProps] = useState(teachersDB[0])
	// console.log(typeof(cardsListProps))
	function TeachersEven(props) {
		return (
			<>
				<CardsListImage cardsListProps={teachersListProps}/>
				<div className="cards-list-descript cards-list-inner">
					<CardsListTitle cardsListProps={teachersListProps}/>
					<CardsListDescript cardsListProps={teachersListProps}/>
				</div>	
			</>
		)
	}

	function TeachersOdd(props) {
		return (
			<>
				<div className="cards-list-descript cards-list-inner">
					<CardsListTitle cardsListProps={teachersListProps}/>
					<CardsListDescript cardsListProps={teachersListProps}/>
				</div>
				<CardsListImage cardsListProps={teachersListProps}/>
			</>
		)
	}
	
	return (
		<main className="main-teachers container">
			<CardsList cardsInfo={teachersDB} even={<TeachersEven/>} odd={<TeachersOdd/>} setCardsListProps={setTeachersListProps}/>
		</main>	
	)
}

export default Teachers;