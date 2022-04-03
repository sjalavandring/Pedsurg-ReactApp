import React, { useState } from 'react';
import arrowLeft from "../../img/slider_arrow-left.png";
import arrowRight from "../../img/slider_arrow-right.png";

function SliderMain(props) {	 //sliderData - массив объектов с информацией о каждом слайде (id, src - ссылка на картинку слайдера, href - ссылка слайдера), SliderSize - объект с width и heigth слайдера
	let [count, setSlide] = useState(1);  
	let [activePoint, setActive] = useState(1);

	function nextSlide() {
		count >= props.sliderData.length ? setSlide(1) : setSlide(count+1);
	}
	function prevSlide() {
		count <= 1 ? setSlide(props.sliderData.length) : setSlide(count-1);
	}  
	function toggleActivePoint() {

	}

	let sliderItems = props.sliderData.map((item, id) => {
		return <span key={item.id} className={count === (id + 1) ? "slider-points__item--active" : "slider-points__item"} onClick={() => setSlide(item.id)}></span>
	})  //Создание точек для переключения слайдов

	return (
		<div className="slider">	
			<div className="slider-arrow arrow-left" draggable="false" onClick={prevSlide}>
				<img className="arrow-inner" src={arrowLeft} alt="" height="40" draggable="false"/>
			</div>
			<div className="slider-body">	
				<div className="slider-slide" width={props.sliderSize.width}>	
					<a  href={props.sliderData[count-1].href}>
						<img src={props.sliderData[count-1].src} alt="" height={props.sliderSize.height}/>	
					</a>
				</div>
				<div className="slider-points">
					{sliderItems}
				</div>
			</div>
			<div className="slider-arrow arrow-right" onClick={nextSlide}>
				<img className="arrow-inner" src={arrowRight} alt="" height="40" draggable="false"/>
			</div>
		</div>	
	)
}

export default SliderMain;