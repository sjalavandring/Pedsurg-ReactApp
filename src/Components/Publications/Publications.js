import React, {useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import Mentions from './Mentions.js';

function Publications() {
	const setActive = ({isActive}) =>  "publications-nav__item " + (isActive ? "publications-nav__item--active" : "");
	
	let [searchTarget, setSearchTarget] = useState("");
	let [publicationsVisibility, setPublicationsVisibility] = useState(1);
	return (
		<main className="main-publications container">
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

export default Publications;
