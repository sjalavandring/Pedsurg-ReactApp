import {CardsList, CardsListImage, CardsListDescript, CardsListTitle, CardsListDropdown} from '../../index.js';
import directionsDB from '../../database/DirectionsDB.js'; 
import {useState} from 'react'
import directionsArrow from '../../img/DirectionsCardsList/directionsArrow.png'
//импорт из отдельного файла массива с информацией для CardsList

function Directions() {
	let [directionsListProps, setDirectionsListProps] = useState(directionsDB[0]);
	function DirectionsElem(props) {
		let [cardsListVisibility, changeCardsListVisibility] = useState(true);
		return (
			<>
				<div className="cards-list-dropdown" onClick={() => {changeCardsListVisibility(!cardsListVisibility);}}>
					<img className="dropdown__img" src={directionsArrow}/> 
					<CardsListDropdown cardsListProps={directionsListProps}/>
				</div>
				<div className={"cards-list-elem " + (cardsListVisibility == true ? "" : "inactive")}>
					<CardsListImage cardsListProps={directionsListProps}/>
					<div className="cards-list-descript cards-list-inner">
						<CardsListTitle cardsListProps={directionsListProps}/>
						<CardsListDescript cardsListProps={directionsListProps}/>
					</div>	
				</div>
			</>
		)
	}

	return (
		<main className="main-directions container">
			<CardsList cardsInfo={directionsDB} even={<DirectionsElem/>} odd={<DirectionsElem/>} setCardsListProps={setDirectionsListProps}/>
		</main>	
	)
}

export default Directions;