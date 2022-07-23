import aboutUs1 from "../../img/aboutUs/aboutUs1.jpg"
import aboutUs2 from "../../img/aboutUs/aboutUs2.jpg"
import aboutUs3 from "../../img/aboutUs/aboutUs3.jpg"

function AboutUs() {
	return (
		<main className="main-aboutus container">
			<div className="aboutus-elem">
				<img className="aboutus__image" src={aboutUs1} alt="aboutUs1"/>	
				<div className="aboutus-descript">
					<div className="aboutus-descript__title"><h3>Трунов Владимир Олегович</h3></div>
					<div className="aboutus-descript__text">Практикующий хирург с более чем 20 летним стажем, детский хирург высшей категории, кандидат медицинских наук, специалист по детской урологии-андрологии, детской онко-хирургии, колопроктологии</div>
				</div>
			</div>
			<div className="aboutus-elem">
				<img className="aboutus__image" src={aboutUs2} alt="aboutUs2"/>
				<div className="aboutus-descript"> 
					<div className="aboutus-descript__title"><h3>Поддубный Игорь Витальевич</h3></div>
					<div className="aboutus-descript__text">Один из ведущих детских колопроктологов и абдоминальных хирургов России, доктор медицинских наук, профессор, зав. кафедрой детской хирургии МГМСУ им. Евдокимова</div> 
				</div>
			</div>
			<div className="aboutus-elem">
				<img className="aboutus__image" src={aboutUs3} alt="aboutUs3"/>
				<div className="aboutus-descript"> 
					<div className="aboutus-descript__title"><h3>Рябов Андрей Борисович</h3></div>
					<div className="aboutus-descript__text">Онкохирург-эксперт, выполняющий сложнейшие вмешательства у детей со злокачественными опухолями, доктор медицинских наук, профессор</div>
				</div>
			</div>
		</main>
	)
}

export default AboutUs;