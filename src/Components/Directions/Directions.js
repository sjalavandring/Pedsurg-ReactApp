import {CardsList} from '../../index.js';
import directionsDB from '../../database/DirectionsDB.js'; 
//импорт из отдельного файла массива с информацией для CardsList

function Directions() {
	return (
		<main className="main-directions container">
			<CardsList cardsInfo={directionsDB}/>
		</main>	
	)
}


export default Directions;