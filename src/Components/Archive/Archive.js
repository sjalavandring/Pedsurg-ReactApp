import wip from '../../img/wip.png'

function Archive() {
	return (
		<main className="main-archive container">
		    <img className="archive-image" src={wip} alt="work in progress"/>
			<div className="archive-message">Страница в разработке</div>
		</main>
	)
}

export default Archive;