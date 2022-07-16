import publicationsInfo from '../../database/PublicationsDB.js';
import publicBooks from '../../database/PublicationBooksDB.js';
import React, {useState, useEffect} from 'react';
import {NavLink, Outlet, useOutletContext} from "react-router-dom";

function Publications() {
	const setActive = ({isActive}) =>  "publications-nav__item " + (isActive ? "publications-nav__item--active" : "");
	
	let [searchTarget, setSearchTarget] = useState("");
	let [publicationsVisibility, setPublicationsVisibility] = useState(1);
	return (
		<main className="main-publications container ">
				<div className="publications-chapters">
					<div className="publications-nav">
						<NavLink className={setActive} to="mentions" component={() => <Mentions searchTarget={searchTarget}/>}>Публикации</NavLink>
						<NavLink className={setActive} to="books">Книги</NavLink>
					</div>
					<div className="publications-search">
						<input  className="search-field" type="text" placeholder="Поиск" onChange={e => setSearchTarget(e.target.value)}/>
					</div>
				</div>	
				<div className="main-publications-content ">	 
					<Outlet context={searchTarget}/>
				</div>	
		</main>
	) 	//При каждом изменении элемента input будет меняться состояние компонента
}	 	//Состояние содержащее цель поиска (searchTarget) передается в виде пропсов в Mentions, а потом в PublicationsItems

function Mentions(props) {
	let searchTarget = useOutletContext();

	let [publicationsVisibility, setPublicationsVisibility] = useState(1);
	function changeA (a) {
		setPublicationsVisibility(a);
	}

	useEffect(() => {
		setPublicationsVisibility(0);
	}, [searchTarget])

	let publicationInfo = publicationsInfo.map((info, id) => {
		return (
			<div className={"publication-content" + (publicationsVisibility > 0 ? "" : "inactive")}  key={id} >
				<PublicationsItems publicationProp={info} searchTarget={searchTarget} changeA={changeA} />
			</div>
		)
	})


	return (
		<div className="publications-mantions-content">
			{publicationInfo}
			{publicationsVisibility > 0 ? "" : <div className="publications-nothing-found">Ничего не найдено</div>}
		</div>
	)

}

function PublicationsItems (props) {
	function handleFunction (a) {
		props.changeA(a);
	}


	let publication = props.publicationProp.publics.map((info, id) => {
		let publicationText = info.name + info.autors + info.description;
		return (
			<div className={"publication " + (publicationText.toLowerCase().includes(props.searchTarget.toLowerCase()) ? "" : "inactive")} key={id}>
				<div className="publication__name publication__item">{info.name}</div>
				<div className="publication__autors publication__item">{info.autors}</div>
				<div className="publication__description publication__item">{info.description}</div>
			</div>	
		)
	})


	let visibleElementsCount = 0;
	publication.forEach((item, id) => {
		if (!item.props.className.includes("inactive")) {
			visibleElementsCount+=1;
		}

	})

	if (visibleElementsCount > 0) {
		setTimeout(() => {
			handleFunction(1);
		});
	}

	return (
		<>	
			<div className={"publication__year " + (visibleElementsCount > 0 ? "" : "inactive")}>{props.publicationProp.year}</div>
			{publication}
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

export {Publications, Mentions, Books};
