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
	const [isZoomed, setZoom] = useState(false);
	const [activeBook, setActiveBook] = useState(0);

	let bookInfo = publicBooks.map((info) => {
		return (
			<div className="book" key={info.id} onClick={() => {setZoom(!isZoomed); setActiveBook(publicBooks[info.id-1])}}><img className="book__img" src={info.link} alt="logo" height="250"/></div>
		)
	})

	return (
		<div className="publications-books-content">
			{bookInfo}
			<div className={"book-zoom-background " + (isZoomed == 1 ? "shadowBack" : "")} onClick={() => setZoom(!isZoomed)}></div>
			<ZoomBook activeBook={activeBook} isZoomed={isZoomed}/>
		</div>
	)
}

function ZoomBook(props) {
	// console.log(props)
	return (
		<BookInformation activeBook={props.activeBook} isZoomed={props.isZoomed}/>
	)
}

function BookInformation (props) {
	return (
		<div className={"book-zoom-info " + (!props.isZoomed ? "inactive" : "")}> {/*Передаю пропс из Books с состоянием, чтобы понять, активно ли окно BookInformation*/}
			<div className="book-zoom__img book-zoom__item"><img className="book__img" src={props.activeBook.link} alt="logo"/></div>
			<div className="book-zoom__description book-zoom__item">{props.activeBook.description}</div>
		</div>	
	)	
}

export {Publications, Mentions, Books};