import notFound from '../../img/not-found.png'

function NotFound () {
	return (
		<div className="not-found">
		    <img className="not-found-image" src={notFound} alt="not found"/>
			<div className="not-found-message">Страница не найдена</div>
		</div>
	)
}

export default NotFound;