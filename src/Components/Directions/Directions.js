import {CardsList, CardsListImage, CardsListDescript, CardsListTitle, CardsListDropdown} from '../../index.js';
import directionsDB from '../../database/DirectionsDB.js'; 
import {useState, useRef, useEffect} from 'react'
import directionsArrow from '../../img/DirectionsCardsList/directionsArrow.png'
//импорт из отдельного файла массива с информацией для CardsList

function Directions() {
	let [directionsListProps, setDirectionsListProps] = useState(directionsDB[0]);
	// let directionsListProps = useRef(directionsDB[0])
	function DirectionsElem(props) {
		// console.log(props.directionsListProps, 1)
		let [cardsListVisibility, changeCardsListVisibility] = useState(false);
		return (
			<>
				<div className="cards-list-dropdown" onClick={() => {changeCardsListVisibility(!cardsListVisibility);}}>
					<img className={"dropdown__img " + (cardsListVisibility == true ? "dropdown__img--active" : "dropdown__img--inactive")} src={directionsArrow}/> 
					<CardsListDropdown cardsListProps={directionsListProps}/>
				</div>
				<div className={"cards-list-elem " + (cardsListVisibility == true ? "cards-list-elem--active" : "inactive")}>
					<CardsListImage cardsListProps={directionsListProps}/>
					<div className="cards-list-descript cards-list-inner">
						<CardsListTitle cardsListProps={directionsListProps}/>
						<CardsListDescript cardsListProps={directionsListProps}/>
					</div>	
				</div>
			</>
		)
	}
	// useEffect(() => {
	// 	console.log(setDirectionsListProps)
	// }, [setDirectionsListProps])

	return (
		<main className="main-directions container">
			<CardsList cardsInfo={directionsDB} even={<DirectionsElem/>} odd={<DirectionsElem/>} setCardsListProps={setDirectionsListProps} directionsListProps={directionsListProps}/>
		</main>	
	)
}

export default Directions;