import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.jpg"
import logo3 from "../../img/logo3.jpg"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import navItems from '../../database/MainMenuDB.js';
import {useState} from 'react';

function HeaderMobile () {
	let [isMenuActive, setMenuState] = useState(false);

	let navList = navItems.map((item) => {
		return <li className="nav-menu__item--mobile" key={item.id}><Link className="nav-menu__item" to={item.link}>{item.text}</Link></li>
	})


	return (
		<header className="header-mobile container">
			<div className="logo">
				<img className="logo__image logo__image--mobile" src={logo1} alt="l"/>
			</div>
			<div className="header-title header-title--mobile">
				<h1>Детская торако-абдоминальная хирургия</h1>
			</div>
			<div className="header-burger" id="outerBurger" onClick={() => setMenuState(!isMenuActive)}>
				<span className="burger__item"></span>
				<span className="burger__item"></span>
				<span className="burger__item"></span>
			</div>
			<div className={(isMenuActive === true ? "shadowBack" : "")} onClick={() => setMenuState(false)}></div>
			<div className={ "nav " + "nav--mobile " + (isMenuActive === true ? "" : "inactive ")}>
				<div className="nav-buttons">
					<div className="nav-buttons-close" onClick={() => setMenuState(false)}>
						<span className="nav-buttons-close__item"></span>
						<span className="nav-buttons-close__item"></span>
					</div>	
				</div>
				<ul className="nav-menu--mobile">
					{navList}
				</ul>
			</div>
		</header>
	)
}

export default HeaderMobile;