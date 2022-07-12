import logo1 from "../../img/logo1.png"
import logo2 from "../../img/logo2.jpg"
import logo3 from "../../img/logo3.jpg"
import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import {Footer} from '../../index.js'
import navItems from '../../database/MainMenuDB.js';
import {useState} from "react"



function Header() {
	let logoNumbers = [
		{id: 1, link: logo1, href: "https://www.radh.ru/"},
		{id: 2, link: logo3, href: "https://fmba.gov.ru/"}, 
		{id: 3, link: logo2, href: "http://xn----9sbdbejx7bdduahou3a5d.xn--p1ai/"}
	];

	//При добавлении новых пунктов меню, добавлять Route в App.js
	return (
		<header className="header container">
			<HeaderTop logos={logoNumbers}/>
			<HeaderNav navItems={navItems}/>
		</header>
	)
}

function HeaderTop(props) {
	const logosList = props.logos.map((logo) => {
		return <a key={logo.id} href={logo.href}><img className="logo__image" src={logo.link} alt="logo" /></a>
	})			//Создание списка из логотипов

	return (
		<div className="header-top">
			<div className="logo">
				{logosList}
			</div>
			<div className="header-title">
				<h1>Детская торако-абдоминальная хирургия</h1>
			</div>	
			<HeaderContacts/>
		</div>
	)
}

function HeaderContacts() {
	let [isContactsActive, setContactsActive] = useState(false);
	return (
		<div className="header-contacts">
			<button className="header-contacts__button" onClick={() => {setContactsActive(!isContactsActive)}}>{isContactsActive == false ? "Показать контакты" : "Скрыть контакты"}</button>
			<div className={"header-contacts-info " + (isContactsActive == true ? "" : "inactive")} >
				<div className="header-contacts__item">Тел: +7 (916) 116-43-24</div>
				<div className="header-contacts__item">Mail: trunov2000@mail.ru</div>
			</div>
		</div>
	)
}

function HeaderNav(props) {

	const setMenuActive = ({isActive}) =>  (isActive ? " nav-menu__item--active" : "nav-menu__item")

	let navList = props.navItems.map((item) => {
		return <li key={item.id} className="nav-menu-elem "><NavLink className={setMenuActive} to={item.link}>{item.text}</NavLink></li>
	}) //Создание списка для элементов навигации
	return (
		<nav className="nav">
			<ul className="nav-menu">
				{navList}
			</ul>
		</nav>
	)
}

export default Header;