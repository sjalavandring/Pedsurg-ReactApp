import {useState, useEffect} from "react";
import React from 'react';
import slider_arrow__left from "../../img/DirectionsCardsList/slider_arrow__left.png";
import slider_arrow__right from "../../img/DirectionsCardsList/slider_arrow__right.png"; //импорт стрелок для слайдера CardsListSlider



function CardsListImage (props) {
	return (
		<div className="cards-list-inner cards-list-image">
			<img className="cards-list-image__item" src={props.cardsListProps.link} alt="illustration"/>
		</div>	

	)
}

function CardsListDescript (props) {
	const element = React.useRef(null);
	// useEffect(() => {
	// 	if (element.current.getBoundingClientRect().height < parseInt(window.getComputedStyle(element.current).maxHeight.split('').splice(0, 3).join(''))) //Приводим к числовумо значению первые три цифры максимальной высоты элемента 
	// 		element.current.style.overflowX = "hidden" 
	// 		//Если текст влезает блок, то прокрутка удаляется 
	// }, [])

	return (
		<p className="cards-list-text cards-list-inner" ref={element}>{props.cardsListProps.text}</p>
	)
}

function CardsListTitle(props) {
	return (
		<h4 className="cards-list-inner cards-list-title">{props.cardsListProps.title}</h4>
	)
}

function CardsListDropdown(props) {
	return (
		<div className="cards-list-dropdown__text">{props.cardsListProps.name}</div>
	)
}

function CardsListSlider(props) {
	const [sliderMemo, setSliderMemo] = useState();  //Состояние необходимо для отслеживания предудущего слайда для корректного отображения анимации слайдов 
	const [isZoomed, setZoom] = useState(false);
	const [activeSlide, setActiveSlide] = useState(0);
	let [currentSlide, setSlide] = useState(1)


	function nextSlide() {
		setSliderMemo(currentSlide);
		currentSlide >= props.cardsListProps.links.length ? setSlide(1) : setSlide(currentSlide + 1);
		setSliderMemo("forward");
	}

	function prevSlide() {
		setSliderMemo(currentSlide);
		currentSlide <= 1 ? setSlide(props.cardsListProps.links.length) : setSlide(currentSlide - 1);
		setSliderMemo("back");
	}

	function checkSlideAnimation() {
		if (sliderMemo == "forward") return "slider-image--next";
		if (sliderMemo == "back") return "slider-image--prev";
		return ""
	}  //Функция проверяет, в какую сторону был переключен слайдер
 
	return (
		<>
			<div className="cards-list-inner cards-list-slider" src={props.cardsListProps.link}>
				<div className="cards-list-slider__arrow cards-list-arrow-left" onClick={prevSlide}>
					<img src={slider_arrow__left} alt="slider_arrow__left"/>
				</div>
				<div className="cards-list-slider-body" onClick={() => {setZoom(true); setActiveSlide(props.cardsListProps.links[currentSlide - 1])}}>
					<img className={"cards-list-slider-image " + (checkSlideAnimation())} src={props.cardsListProps.links[currentSlide - 1]} alt="illustration"/>
				</div>	
				<div className="cards-list-slider__arrow cards-list-arrow-right" onClick={nextSlide}>
					<img src={slider_arrow__right} alt="slider_arrow__right"/>
				</div>
			</div>	
			<div className={"diresctions-zoom-background " + (isZoomed == 1 ? "shadowBack" : "")} onClick={() => setZoom(!isZoomed)}></div>
			<ZoomSlide activeSlide={activeSlide} isZoomed={isZoomed}/>
		</>
	)
	//часть классов для слайдера CardsList берется из таблицы стилей Slider
}

function ZoomSlide(props) {
	return (
		<div className={"cards-list-slider-zoom " + (!props.isZoomed ? "inactive" : "")}>
			<img className="cards-list-slider__img cards-list-slider__item" src={props.activeSlide} alt="slider-image"/>
		</div>
	)
} //компонент для открытия модального окна с текущей картинкой слайдера
 


//тут хранятся все компоненты, использующиеся для разных вариаций сборки списка элементов cardsList

export {CardsListImage, CardsListDescript, CardsListTitle, CardsListDropdown, CardsListSlider};