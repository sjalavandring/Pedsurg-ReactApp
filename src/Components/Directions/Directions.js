import {CardsList, DirectionsContext} from '../../index.js';
import directionsDB from '../../database/DirectionsDB.js'; 
import {useState, useEffect} from 'react';
import React from 'react'
import directionsArrow from '../../img/DirectionsCardsList/directionsArrow.png';
import slider_arrow__left from "../../img/DirectionsCardsList/slider_arrow__left.png";
import slider_arrow__right from "../../img/DirectionsCardsList/slider_arrow__right.png"; //импорт стрелок для слайдера DirectionsListSlider

// import ReactCSSTransitionGroup from 'react-transition-group';

//импорт из отдельного файла массива с информацией для Directions

function Directions() {
	// let [directionsListProps, setDirectionsListProps] = useState(directionsDB[0]);
	function DirectionsElem(props) {
		let [directionsVisibility, changeDirectionsVisibility] = useState(false);
		return (
			<>
				<div className="directions-dropdown" onClick={() => {changeDirectionsVisibility(!directionsVisibility);}}>
					<div className={"dropdown-button " + (directionsVisibility == true ? "dropdown-button--active" : "")}> 
						<img className="dropdown-button__img" src={directionsArrow}/> 
					</div>
					<DirectionsDropdown directionsProps={props.directionsListProps}/>
				</div>
				<div className={"directions-elem " + (directionsVisibility == true ? "directions-elem--active" : "inactive")}>
					<DirectionsSlider directionsProps={props.directionsListProps}/>
					<div className="directions-descript directions-inner">
						<DirectionsTitle directionsProps={props.directionsListProps}/>
						<DirectionsDescript directionsProps={props.directionsListProps}/>
					</div>	
				</div>
			</>
		)
	}

	let directionsListInfo = directionsDB.map((item, id) => {	
			return (
				<div className="cards-list-element" key={id}>
					<DirectionsElem directionsListProps={directionsDB[id]}/>
				</div>
			) 
		}
	)

	return (
		<main className="main-directions container">
			{directionsListInfo}
		</main>	
	)
}

function DirectionsDescript (props) {
	const element = React.useRef(null);
	// useEffect(() => {
	// 	if (element.current.getBoundingClientRect().height < parseInt(window.getComputedStyle(element.current).maxHeight.split('').splice(0, 3).join(''))) //Приводим к числовумо значению первые три цифры максимальной высоты элемента 
	// 		element.current.style.overflow = "hidden !important" 
	// 		//Если текст влезает блок, то прокрутка удаляется 
	// }, [])

	return (
		<p className="directions-text directions-inner" ref={element}>{props.directionsProps.text}</p>
	)
}

function DirectionsTitle(props) {
	return (
		<h4 className="directions-inner directions-title">{props.directionsProps.title}</h4>
	)
}

function DirectionsDropdown(props) {
	return (
		<div className="directions-dropdown__text">{props.directionsProps.name}</div>
	)
}

function ZoomSlide(props) {
	return (
		<div className={"directions-slider-zoom " + (!props.isZoomed ? "inactive" : "")}>
			<img className="directions-slider__img directions-slider__item" src={props.activeSlide} alt="slider-image"/>
		</div>
	)
}

function DirectionsSlider(props) {
	const [sliderMemo, setSliderMemo] = useState();  //Состояние необходимо для отслеживания предудущего слайда для корректного отображения анимации слайдов 
	const [isZoomed, setZoom] = useState(false);
	const [activeSlide, setActiveSlide] = useState(0);
	let [currentSlide, setSlide] = useState(1)


	function nextSlide() {
		setSliderMemo(currentSlide);
		currentSlide >= props.directionsProps.links.length ? setSlide(1) : setSlide(currentSlide + 1);
		setSliderMemo("forward");
	}

	function prevSlide() {
		setSliderMemo(currentSlide);
		currentSlide <= 1 ? setSlide(props.directionsProps.links.length) : setSlide(currentSlide - 1);
		setSliderMemo("back");
	}

	function checkSlideAnimation() {
		if (sliderMemo == "forward") return "slider-image--next";
		if (sliderMemo == "back") return "slider-image--prev";
		return ""
	}  //Функция проверяет, в какую сторону был переключен слайдер
 
	return (
		<>
			<div className="directions-inner directions-slider" src={props.directionsProps.link}>
				<div className="directions-slider__arrow directions-arrow-left" onClick={prevSlide}>
					<img src={slider_arrow__left} alt="slider_arrow__left"/>
				</div>
				<div className="directions-slider-body" onClick={() => {setZoom(true); setActiveSlide(props.directionsProps.links[currentSlide - 1])}}>
					<img className={"directions-slider-image " + (checkSlideAnimation())} src={props.directionsProps.links[currentSlide - 1]} alt="illustration"/>
				</div>	
				<div className="directions-slider__arrow directions-arrow-right" onClick={nextSlide}>
					<img src={slider_arrow__right} alt="slider_arrow__right"/>
				</div>
			</div>	
			<div className={"directions-zoom-background " + (isZoomed == 1 ? "shadowBack" : "")} onClick={() => setZoom(!isZoomed)}></div>
			<ZoomSlide activeSlide={activeSlide} isZoomed={isZoomed}/>
		</>
	)
	//часть классов для слайдера Directions берется из таблицы стилей Slider
}

function DirectionsImage (props) {
	return (
		<div className="directions-inner directions-image">
			<img className="directions-image__item" src={props.directionsProps.link} alt="illustration"/>
		</div>	

	)
}


export default Directions;