import publicationsInfo from '../../database/PublicationsDB.js';
import publicBooks from '../../database/PublicationBooksDB.js';
import React, { useState } from 'react';
import {Header, Main, Footer, Directions} from '../../index.js';
import {BrowserRouter, NavLink, Outlet} from "react-router-dom";

function Publications() {

	const setActive = ({isActive}) =>  "publications-chapters__item " + (isActive ? "publications-chapters__item--active" : "");

	return (
		<main className="main-publications container ">
				<div className="main-publications-chapters">
					<NavLink className={setActive} to="mentions">Публикации</NavLink>
					<NavLink className={setActive} to="books">Книги</NavLink>
				</div>	
				<div className="main-publications-content ">
					<Outlet/>
				</div>	
		
		</main>
	)
}
//Добавить изменение стиля при переключении между разделами
function Mentions() {
	let publicationInfo = publicationsInfo.map((info) => {
		return (
			<div className="publication-content">
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
	const [zoom, setZoom] = useState(false);

	let bookInfo = publicBooks.map((info) => {
		return (
			<div className="book" key={info.id} onClick={() => setZoom(!zoom)}><img className="book__img" src={info.link} alt="logo" height="250"/></div>
		)
	})
	console.log(zoom)
	return (
		<div className="publications-books-content">
			{bookInfo}
			<div className={"book-zoom " + (zoom == 1 ? "shadowBack" : "")} onClick={() => setZoom(!zoom)}></div>
			<ZoomBook/>
		</div>
	)
}

function ZoomBook() {
	// setZoom(100);
	return (
		<BookInformation/>
	)
}

function BookInformation () {
	return (
		<div className={"book-zoom-info"}>
			<div className="book-zoom__img book-zoom__item"><img className="book__img" src={publicBooks[1].link} alt="logo" height="330"/></div>
			<div className="book-zoom__description book-zoom__item">{publicBooks[1].description}</div>
		</div>	
	)	
}

export {Publications, Mentions, Books};