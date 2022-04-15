import publicationsInfo from '../../database/CardsListDB.js';
for (let key of publicationsInfo) {
	console.log(key.id)
}

function Publications() {
	return (
		<main className="main-publications container">
			<div>Test</div>	
		</main>
	)
}

function PublicationsItems (props) {

	return (
		<div className="publication">
			<div className="publication-year"></div>
			<div className="publication-name"></div>
			<div className="publication-autors"></div>
			<div className="publication-description"></div>
		</div>		
	)
}

export default Publications;