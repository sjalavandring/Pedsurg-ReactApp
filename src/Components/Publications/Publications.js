import publicationsInfo from '../../database/PublicationsDB.js';
import publicBooks from '../../database/PublicationBooksDB.js';
import React, {useState} from 'react';
import {Header, Main, Footer, Directions} from '../../index.js';
import {BrowserRouter, NavLink, Outlet, useOutletContext} from "react-router-dom";

function Publications() {

	const setActive = ({isActive}) =>  "publications-nav__item " + (isActive ? "publications-nav__item--active" : "");
	
	let [searchTarget, setSearchTarget] = useState("");

	return (
		<main className="main-publications container ">
				<div className="publications-chapters">
					<div className="publications-nav">
						<NavLink className={setActive} to="mentions" component={() => <Mentions searchTarget={searchTarget}/>}>Публикации</NavLink>
						<NavLink className={setActive} to="books">Книги</NavLink>
					</div>
					<input  className="publications-search" type="text" placeholder="Поиск" onChange={e => setSearchTarget(e.target.value)}/>
				</div>	
				<div className="main-publications-content ">	 
					<Outlet context={searchTarget}/>
				</div>	
		</main>
	) 	//При каждом изменении элемента input будет меняться состояние компонента
}	 	//Состояние содержащее цель поиска (searchTarget) передается в виде пропсов в Mentions, а потом в PublicationsItems

function Mentions(props) {
	let [visibleYearsCount, setVisibleYearsCount] = useState(0);

	let searchTarget = useOutletContext();

	let publicationInfo = publicationsInfo.map((info, id) => {
		return (
			<div className={"publication-content " + (visibleYearsCount == 0 ? "" : "inactive")} key={id}>
				<div className="publication__year">{info.year}</div>
				<PublicationsItems publicationProp={info.publics} searchTarget={searchTarget} visibleYearsCount={[visibleYearsCount, setVisibleYearsCount]}/>
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
	let [visibleYearsCount, setVisibleYearsCount] = props.visibleYearsCount;

	let publicationProp = props.publicationProp.map((info, id) => {
	
		let publicationText = info.name + info.autors + info.description;

		return (
			<div className={"publication " + (publicationText.toLowerCase().indexOf(props.searchTarget.toLowerCase()) != -1 ? "" : "inactive")}  key={id}>
				<div className="publication__name publication__item">{info.name}</div>
				<div className="publication__autors publication__item">{info.autors}</div>
				<div className="publication__description publication__item">{info.description}</div>
			</div>	
		)
	})
	
	publicationProp.forEach((item, id) => {
		if (item.props.className.indexOf("inactive") == -1) {

		}
	})
	setVisibleYearsCount(2)
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





//visibleYearsCount != 0 ? <div className="publications-nothing-found">Ничего не найдено</div> : 