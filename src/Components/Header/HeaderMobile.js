import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.jpg"
import logo3 from "../../img/logo3.jpg"
import {Link} from "react-router-dom";
import navItems from '../../database/MainMenuDB.js';
import {useState} from 'react';

function HeaderMobile () {
	let logoNumbers = [
		{id: 1, link: logo2, href: "https://www.radh.ru/"},
		{id: 2, link: logo1, href: "https://fmba.gov.ru/"}, 
		{id: 3, link: logo3, href: "http://xn----9sbdbejx7bdduahou3a5d.xn--p1ai/"}
	];

	let [isMenuActive, setMenuState] = useState(false);

	function NavItems () {
		let navList = navItems.map((item) => {
			return <li className="nav-menu__item--mobile" key={item.id} onClick={() => closeMobileMenu()}><Link className="nav-menu__item" to={item.link}>{item.text}</Link></li>
		})
		return navList;
	}

	function closeMobileMenu () {
		setMenuState(false);
	}

	function MobileMenuContacts () {
		return (
		<div className="header-contacts-info">
			<div className="header-contacts__item">Тел: +7 (916) 116-43-24</div>
			<div className="header-contacts__item">Mail: trunov2000@mail.ru</div>
		</div>
		)
	}

	function MobileMenuIcons () {
		const logosList = logoNumbers.map((logo) => { 
			return <a key={logo.id} href={logo.href}><img className="nav-logo__item--mobile " src={logo.link} alt="logo" /></a>
		})

		return (
			<div className="nav-logo--mobile">{logosList}</div>
		)
	}

	return (
		<header className="header-mobile container">
			<div className="logo">
				<img className="logo__image logo__image--mobile" src={logo1} alt="l"/>
			</div>
			<div className="header-title header-title--mobile">
				<h1>Детская торако-абдоминальная хирургия</h1>
			</div>
			<div className="header-burger" id="outerBurger" onClick={() => setMenuState(!isMenuActive)} tabIndex="0">
				<span className="burger__item"></span>
				<span className="burger__item"></span>
				<span className="burger__item"></span>
			</div>
			<div className={"nav nav--mobile " + (isMenuActive === true ? "" : "inactive ")}>
				<div className="nav-buttons">
					<div className="nav-buttons-close" onClick={() => closeMobileMenu()}>
						<span className="nav-buttons-close__item"></span>
						<span className="nav-buttons-close__item"></span>
					</div>	
				</div>
				<ul className="nav-menu--mobile">
					<NavItems/>
					<MobileMenuContacts/>
					<MobileMenuIcons/>
				</ul>
			</div>
			<div className={"header-background " + (isMenuActive === true ? "shadowBack" : "")} onClick={() => closeMobileMenu()}></div>
		</header>
		
	)
}

export default HeaderMobile;