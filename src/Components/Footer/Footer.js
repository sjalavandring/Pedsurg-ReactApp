import instagram from "../../img/instagram_cont.png"
import telegram from "../../img/telegram_cont.png"
import youtube from "../../img/youtube_cont.png"

function Footer() {
	return (
		<footer className="footer container">
			<div className="footer-copyright">©Владимир Трунов 2022</div>
			<div className="footer-socials">Адрес: Москва, ул. Москворечье, д.20 Федеральный научно-клинический центр детей и подростков ФМБА России</div>
			<div className="footer-socials">
				<div className="footer-socials__item"><a href="#"><img src={instagram} alt="inst_ico" height="25"/></a></div>
				<div className="footer-socials__item"><a href="#"><img src={telegram} alt="tg_ico" height="25"/></a></div>
				<div className="footer-socials__item"><a href="#"><img src={youtube} alt="ggl_ico" height="25"/></a></div>
			</div>
		</footer>
	)
}

export default Footer;