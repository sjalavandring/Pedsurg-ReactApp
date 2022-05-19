import MediaQuery from 'react-responsive';
import SliderMain from '../SliderMain/Slider.js'
import slide1 from "../../img/main-slider/slide1.jpg";
import slide2 from "../../img/main-slider/slide2.jpg";
import slide3 from "../../img/main-slider/slide3.jpg";
import slide4 from "../../img/main-slider/slide4.jpg";
import slide5 from "../../img/main-slider/slide5.jpg";
import slide6 from "../../img/main-slider/slide6.jpg";

function Main() {
	let sliderData = [
		{id: 1, src: slide1, href: "https://www.google.ru/"},
		{id: 2, src: slide2, href: "https://www.google.ru/"},
		{id: 3, src: slide3, href: "https://www.google.ru/"},
		{id: 4, src: slide4, href: "https://www.google.ru/"},
		{id: 5, src: slide5, href: "https://www.google.ru/"},
		{id: 6, src: slide6, href: "https://www.google.ru/"},
	]

	return (
		<main className="main container" >
			<MediaQuery maxWidth={767}>
				<SliderMain sliderData={sliderData} sliderSize={{width: "500px", height: "500px"}}/>
			</MediaQuery>		
			<MediaQuery minWidth={768}>
				<SliderMain sliderData={sliderData} sliderSize={{width: "800px", height: "700px"}}/>
			</MediaQuery>
		</main> 
	)
}

//Разный размер изображения в слайдере в зависимости от разрешения		

export default Main;

