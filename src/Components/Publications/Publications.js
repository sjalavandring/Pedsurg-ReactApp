import publicationsInfo from '../../database/PublicationsDB.js';
import publicBooks from '../../database/PublicationBooksDB.js';
import React, { useState, useContext } from 'react';
import {Header, Main, Footer, Directions} from '../../index.js';
import {BrowserRouter, NavLink, Outlet} from "react-router-dom";

function Publications() {

	const setActive = ({isActive}) =>  "publications-nav__item " + (isActive ? "publications-nav__item--active" : "");
	
	let [searchTarget, setSearchTarget] = useState();
	let seacrhContext = useContext(searchTarget)

	return (
		<main className="main-publications container ">
				<div className="publications-chapters">
					<div className="publications-nav">
						<NavLink className={setActive} to="mentions">Публикации</NavLink>
						<NavLink className={setActive} to="books">Книги</NavLink>
					</div>
					<input  className="publications-search" type="text" placeholder="Поиск" onChange={e => setSearchTarget(e.target.value)}/>
				</div>	
				<div className="main-publications-content ">
					<Outlet searchTarget={searchTarget}/>
				</div>	
		</main>
	) //При каждом изменении элемента input будет меняться состояние компонента
}	 //Состояние содержащее цель поиска (searchTarget) передается в виде пропсов в Mentions, а потом в PublicationsItems

function Mentions() {
	console.log(props.searchTarget)
	let publicationInfo = publicationsInfo.map((info, id) => {
		return (
			<div className="publication-content" key={id}>
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
		let spublicationProp = props.publicationProp.map((info, id) => {
		let publicationText = info.name + info.autors + info.description;

		return (
			<div className={"publication " + (publicationText.indexOf(props.searchTarget) != -1 ? "" : "inactive")} key={id}>
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
		<div className="publications-books">
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