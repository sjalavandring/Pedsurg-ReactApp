import {CardsList} from '../../index.js';
import teachersDB from '../../database/DirectionsDB.js'; 

function Teachers() {
	return (
		<main className="main-teachers container">
			<CardsList cardsInfo={teachersDB}/>
		</main>	
	)
}

export default Teachers;