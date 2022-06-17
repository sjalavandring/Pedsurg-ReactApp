import aboutUs1 from "../../img/aboutUs/aboutUs1.jpg"
import aboutUs2 from "../../img/aboutUs/aboutUs2.jpg"
import aboutUs3 from "../../img/aboutUs/aboutUs3.jpg"

function AboutUs() {
	return (
		<div className="main-aboutus container">
			<div className="aboutus-elem">
				<img className="aboutus__image" src={aboutUs1} alt="aboutUs1"/>
				<div className="aboutus__descript">
					Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Minima exercitationem expedita esse recusandae officiis quis inventore perferendis consectetur. Veritatis, voluptatibus blanditiis excepturi quaerat alias quas magni a officia quia labore.	
				</div>
			</div>
			<div className="aboutus-elem">
				<img className="aboutus__image" src={aboutUs1} alt="aboutUs1"/>
				<div className="aboutus__descript">
					Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Minima exercitationem expedita esse recusandae officiis quis inventore perferendis consectetur. Veritatis, voluptatibus blanditiis excepturi quaerat alias quas magni a officia quia labore.	
				</div>
			</div>
			<div className="aboutus-elem">
				<img className="aboutus__image" src={aboutUs1} alt="aboutUs1"/>
				<div className="aboutus__descript">
					Lorem, ipsum dolor sit amet consectetur, adipisicing elit. Minima exercitationem expedita esse recusandae officiis quis inventore perferendis consectetur. Veritatis, voluptatibus blanditiis excepturi quaerat alias quas magni a officia quia labore.	
				</div>
			</div>
		</div>
	)
}

export default AboutUs;