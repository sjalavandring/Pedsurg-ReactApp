import instagram from "../../img/instagram_cont.png"
import telegram from "../../img/telegram_cont.png"
import youtube from "../../img/youtube_cont.png"

function Footer() {
	return (
		<footer className="footer container">
			<div className="footer-copyright">©Владимир Трунов 2022</div>
			<div className="footer-socials">Адрес: Москва, ул. Москворечье, д.20 Федеральный научно-клинический центр детей и подростков ФМБА России</div>
			<div className="footer-socials">
				<a href="#"><img className="footer-socials__item" src={instagram} alt="inst_ico"/></a>
				<a href="#"><img className="footer-socials__item" src={telegram} alt="tg_ico"/></a>
				<a href="#"><img className="footer-socials__item" src={youtube} alt="ggl_ico"/></a>
			</div>
		</footer>
	)
}

export default Footer;