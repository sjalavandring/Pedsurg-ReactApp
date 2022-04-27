import publicationsInfo from '../../database/PublicationsDB.js';
import publicBooks from '../../database/PublicationBooksDB.js';
import {Header, Main, Footer, Directions} from '../../index.js';
import {BrowserRouter, Routes, Route, NavLink, Link} from "react-router-dom";

function Publications() {
	return (
		<main className="main-publications container">
				<div className="publications-chapters">
					<NavLink className="publications-chapters__item" to="mentions">Публикации</NavLink>
					<NavLink className="publications-chapters__item" to="books">Книги</NavLink>
				</div>	
				<Mentions/>	
				<Books/>
		</main>
	)
}
//Добавить изменение стиля при переключении между разделами
function Mentions() {
	let publicationInfo = publicationsInfo.map((info) => {
		return (
			<div className="publications-content">
				<div className="publication-year">{info.year}</div>
				<PublicationsItems publicationProp={info.publics}/>
			</div>
		)
	})

	return (
		<div className="main-publications-content">
		  {publicationInfo}
		</div>
	)
}

function PublicationsItems (props) {
	let  publicationProp = props.publicationProp.map((info) => {
		return (
			<div className="publication">
				<div className="publication-name publication-item">{info.name}</div>
				<div className="publication-autors publication-item">{info.autors}</div>
				<div className="publication-description publication-item">{info.description}</div>
			</div>	
		)
	})
	return (
		<div className="publications">
			{publicationProp}
		</div>	
	)
}

function Books() {
	let bookInfo = publicBooks.map((info) => {
		return (
			<div className="books__item" key={info.id}><img src={info.link} alt="logo" height="250"/></div>
		)
	})
	return (
		<div className="main-books-content">
			{bookInfo}
		</div>
	)
}


export {Publications, Mentions, Books};