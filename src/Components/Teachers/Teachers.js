import {CardsList, CardsListImage, CardsListDescript, CardsListTitle, useInnerWidth} from '../../index.js';
import teachersDB from '../../database/TeachersDB.js'; 
import {useState} from 'react'


function Teachers() {
	let [teachersListProps, setTeachersListProps] = useState(teachersDB[0])
	let innerWidth = useInnerWidth();
	// console.log(teachersListProps)
	function TeachersEven(props) {
		return (
			<div className="cards-list-elem">
				<CardsListImage cardsListProps={props.teachersListProps}/>
				<div className="cards-list-descript cards-list-inner">
					<CardsListTitle cardsListProps={props.teachersListProps}/>
					<CardsListDescript cardsListProps={props.teachersListProps}/>
				</div>	
			</div>
		)
	}

	function TeachersOdd(props) {
		return (
			<div className="cards-list-elem teachers-elem">
				<div className="cards-list-descript cards-list-inner">
					<CardsListTitle cardsListProps={props.teachersListProps}/>
					<CardsListDescript cardsListProps={props.teachersListProps}/>
				</div>
				<CardsListImage cardsListProps={props.teachersListProps}/>
			</div>
		)
	}
	
	let teachersListInfo = teachersDB.map((item, id) => {	
		if ((item.id % 2 == 1) || (innerWidth < 991)) {
			return (
				<div className="cards-list-container" key={id}>
					<TeachersEven teachersListProps={teachersDB[id]}/>
				</div>
			) 
		} else 
		if (item.id % 2 == 0)  {
			return (
				<div className="cards-list-container" key={id}>
					<TeachersOdd teachersListProps={teachersDB[id]}/>
				</div>
			)
		}	
	})

	return (
		<main className="main-teachers container">
			<CardsList cardsListInfo={teachersListInfo}/>
		</main>	
	)
}

export default Teachers;