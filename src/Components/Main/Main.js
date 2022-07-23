import MediaQuery from 'react-responsive';
import SliderMain from '../SliderMain/Slider.js'
import slide1 from "../../img/main-slider/slide1.jpg";
import slide2 from "../../img/main-slider/slide2.jpg";
import slide3 from "../../img/main-slider/slide3.jpg";
import slide4 from "../../img/main-slider/slide4.jpg";
import slide5 from "../../img/main-slider/slide5.jpg";
import slide6 from "../../img/main-slider/slide6.jpg";
import slide7 from "../../img/main-slider/slide7.jpg";

function Main() {
	let sliderData = [
		{id: 1, src: slide1},
		{id: 2, src: slide2},
		{id: 3, src: slide3},
		{id: 4, src: slide4},
		{id: 5, src: slide5},
		{id: 6, src: slide6},
		{id: 7, src: slide7},
	]
	return (
		<main className="main container" >
			<MediaQuery maxWidth={767}>
				<SliderMain sliderData={sliderData} sliderSize={{width: "450px", height: "600px"}}/>
			</MediaQuery>		
			<MediaQuery minWidth={768}>
				<SliderMain sliderData={sliderData} sliderSize={{width: "800px", height: "700px"}}/>
			</MediaQuery>
			<div className="main-description">
				<p className="main-description__text">Хирургия - профессия, требующая знаний, концентрации, физических кондиций и конечно психологического состояния: стабильного, беспристрастного восприятия ситуаций, которые для других людей могут быть стрессовыми. Любой хирург, неважно детский или взрослый- врач наделенный максимальной ответственностью за жизнь своих пациентов. Те кто выбрал эту нелегкую специальность, должен непрерывно двигаться дальше, несмотря на все сложности, преодолевая препятствия и себя. Российская хирургическая школа воспитала не одно поколение выдающихся специалистов, оставивших много суждений о профессии, но  одним из наиболее емких, на мой взгляд, является высказывание выдающегося онкохирурга, нашего современника Игоря Александровича  Файнштейна:</p>   
				<div className="main-description-quote">
					<div className="main-description-quote__quotes quotes--left">“</div>
					<blockquote className="main-description-quote__text">А вообще-то, я делю хирургов на четыре категории: ученик, ремесленник, профессионал, который все делает правильно, и художник... Художник может сам создавать правила - конечно, не во вред пациенту. И мне всегда хочется проникнуть туда, куда до меня никто не совался, сделать то, что считалось невозможным, отступить от правил...</blockquote>
					<div className="main-description-quote__quotes quotes--right">“</div>
				</div>	
			</div>
		</main> 
	)
}

//Разный размер изображения в слайдере в зависимости от разрешения		

export default Main;

