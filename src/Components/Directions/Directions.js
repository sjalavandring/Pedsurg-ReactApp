import {Header, CardsList} from '../../index.js';
import dirInfo from '../../database/CardsListDB.js'; 
//импорт из отдельного файла массива с информацией для CardsList

function Directions() {
	return (
		<main className="main-directions container">
			<CardsList dirInfo={dirInfo}/>
		</main>	
	)
}


export default Directions;