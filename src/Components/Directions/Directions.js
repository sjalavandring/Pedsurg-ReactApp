import {Header, CardsList} from '../../index.js';
import cardsInfo from '../../database/CardsListDB.js'; 
//импорт из отдельного файла массива с информацией для CardsList

function Directions() {
	return (
		<main className="main-directions container">
			<CardsList cardsInfo={cardsInfo}/>
		</main>	
	)
}


export default Directions;