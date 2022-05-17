import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.jpg"
import logo3 from "../../img/logo3.jpg"

function HeaderMobile () {
	return (
		<header className="header-mobile container">
			<div>
				<img className="logo__image" src={logo1} alt="l"/>
			</div>
			<div className="header-title header-title--mobile">
				<h1>Детская торако-абдоминальная хирургия</h1>
			</div>
			<div class="burger" id="outerBurger">
				<span class="burger__item"></span>
				<span class="burger__item"></span>
				<span class="burger__item"></span>
			</div>
		</header>
	)
}

export default HeaderMobile;