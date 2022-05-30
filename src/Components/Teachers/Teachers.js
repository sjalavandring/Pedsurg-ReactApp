import {CardsList, CardsListImage, CardsListDescript} from '../../index.js';
import teachersDB from '../../database/DirectionsDB.js'; 
import {useState} from 'react'

function Teachers() {
	let [cardsListProps, setCardsListProps] = useState(teachersDB[0])
	
	function Test1(props) {
		return (
			<div className="cards-list__descript cards-list__item">
				{cardsListProps.text}
			</div>
		)
	}

	function Test2(props) {
		return (
			<div className="cards-list__descript cards-list__item">
				{cardsListProps.text}
			</div>
		)
	}
	
	return (
		<main className="main-teachers container">
			<CardsList cardsInfo={teachersDB} test1={<Test1/>} test2={<Test2/>} setCardsListProps={setCardsListProps()}/>
		</main>	
	)
}

export default Teachers;