import {CardsList, CardsListImage, CardsListDescript, CardsListTitle, CardsListDropdown, CardsListSlider, DirectionsContext} from '../../index.js';
import directionsDB from '../../database/DirectionsDB.js'; 
import {useState, useEffect} from 'react'
import directionsArrow from '../../img/DirectionsCardsList/directionsArrow.png'

//импорт из отдельного файла массива с информацией для CardsList

function Directions() {
	// let [directionsListProps, setDirectionsListProps] = useState(directionsDB[0]);
	function DirectionsElem(props) {
		let [cardsListVisibility, changeCardsListVisibility] = useState(false);
		return (
			<>
				<div className="cards-list-dropdown" onClick={() => {changeCardsListVisibility(!cardsListVisibility);}}>
					<img className={"cards-list-dropdown__img " + (cardsListVisibility == true ? "cards-list-dropdown__img--active" : "dropdown__img--inactive")} src={directionsArrow}/> 
					<CardsListDropdown cardsListProps={props.directionsListProps}/>
				</div>
				<div className={"cards-list-elem directions-elem " + (cardsListVisibility == true ? "cards-list-elem--active" : "inactive")}>
					<CardsListSlider cardsListProps={props.directionsListProps}/>
					<div className="cards-list-descript cards-list-inner">
						<CardsListTitle cardsListProps={props.directionsListProps}/>
						<CardsListDescript cardsListProps={props.directionsListProps}/>
					</div>	
				</div>
			</>
		)
	}

	let directionsListInfo = directionsDB.map((item, id) => {	
			return (
				<div className="cards-list-container" key={id}>
					<DirectionsElem directionsListProps={directionsDB[id]}/>
				</div>
			) 
		}
	)

	return (
		<main className="main-directions container">
			<CardsList cardsListInfo={directionsListInfo}/>
		</main>	
	)
}

export default Directions;