import publicationsInfo from '../../database/PublicationsDB.js';
import publicBooks from '../../database/PublicationBooksDB.js';
import React, {useState, useEffect} from 'react';
import {NavLink, Outlet, useOutletContext} from "react-router-dom";

function Books() {
	const [isZoomed, setZoom] = useState(false);
	const [activeBook, setActiveBook] = useState(0);

	let bookInfo = publicBooks.map((info) => {
		return (
			<div className="book" key={info.id} onClick={() => {setZoom(!isZoomed); setActiveBook(publicBooks[info.id-1])}}><img className="book__img" src={info.link} alt="logo" height="250"/></div>
		)
	})

	return (
		<div className="publications-books">
			{bookInfo}
			<div className={"book-zoom-background " + (isZoomed === true ? "shadowBack" : "")} onClick={() => setZoom(!isZoomed)}></div>
			<ZoomBook activeBook={activeBook} isZoomed={isZoomed}/>
		</div>
	)
}

function ZoomBook(props) {
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

export default Books;