import publicationsInfo from '../../database/PublicationsDB.js';
import publicBooks from '../../database/PublicationBooksDB.js';
import {Header, Main, Footer, Directions} from '../../index.js';
import {BrowserRouter, Routes, Route, NavLink, Link, Outlet} from "react-router-dom";

function Publications() {
	return (
		<main className="main-publications container">
				<div className="publications-chapters">
					<NavLink className="publications-chapters__item" to="mentions">Публикации</NavLink>
					<NavLink className="publications-chapters__item" to="books">Книги</NavLink>
				</div>	
				<div className="publications-content">
					<Outlet/>
				</div>	
		</main>
	)
}
//Добавить изменение стиля при переключении между разделами
function Mentions() {
	let publicationInfo = publicationsInfo.map((info) => {
		return (
			<div className="publications-content">
				<div className="publication__year">{info.year}</div>
				<PublicationsItems publicationProp={info.publics}/>
			</div>
		)
	})

	return (
		<div className="publications-mantions-content">
		  {publicationInfo}
		</div>
	)
}

function PublicationsItems (props) {
	let  publicationProp = props.publicationProp.map((info) => {
		return (
			<div className="publication">
				<div className="publication__name publication__item">{info.name}</div>
				<div className="publication__autors publication__item">{info.autors}</div>
				<div className="publication__description publication__item">{info.description}</div>
			</div>	
		)
	})
	return (
		<>
			{publicationProp}
		</>	
	)
}

function Books() {
	let bookInfo = publicBooks.map((info) => {
		return (
			<div className="book" key={info.id}><img className="book__img" src={info.link} alt="logo" height="250"/></div>
		)
	})
	return (
		<div className="publications-books-content">
			{bookInfo}
		</div>
	)
}


export {Publications, Mentions, Books};