import {Header, CardsList} from '../../index.js';
import dirInfo from '../../database/CardsListDB.js'; 
//импорт из отдельного файла массива с информацией для CardsList

function Directions() {
	return (
		<div className="container">
			<CardsList dirInfo={dirInfo}/>
		</div>	
	)
}


export default Directions;