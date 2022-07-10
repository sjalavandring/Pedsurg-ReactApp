import {useState} from "react";
import slider_arrow__left from "../../img/DirectionsCardsList/slider_arrow__left.png";
import slider_arrow__right from "../../img/DirectionsCardsList/slider_arrow__right.png"; //импорт стрелок для слайдера CardsListSlider


function CardsListImage (props) {
	return (
		<img className="cards-list-inner cards-list-image" src={props.cardsListProps.link} alt="illustration"/>	
	)
}

function CardsListDescript (props) {
	return (
		<p className="cards-list-inner cards-list-text">{props.cardsListProps.text}</p>
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
	let [currentSlide, setSlide] = useState(1)

	function nextSlide() {
		currentSlide >= props.cardsListProps.links.length ? setSlide(1) : setSlide(currentSlide + 1);
	}
	function prevSlide() {
		currentSlide <= 1  ? setSlide(props.cardsListProps.links.length) : setSlide(currentSlide - 1);
	}
	console.log(currentSlide)
	return (
		<div className="cards-list-inner cards-list-slider" src={props.cardsListProps.link}>
			<div className="cards-list-slider__arrow cards-list-arrow-left" onClick={prevSlide}>
				<img src={slider_arrow__left} alt="slider_arrow__left"/>
			</div>
			<div className="cards-list-slider-body">
				<img className="cards-list-slider-image" src={props.cardsListProps.links[currentSlide - 1]} alt="illustration"/>
			</div>	
			<div className="cards-list-slider__arrow cards-list-arrow-right" onClick={nextSlide}>
				<img src={slider_arrow__right} alt="slider_arrow__right"/>
			</div>
		</div>	
	)
	//часть классов для слайдера CardsList берется из таблицы стилей Slider
}



//тут хранятся все компоненты, использующиеся для разных вариаций сборки списка элементов cardsList

export {CardsListImage, CardsListDescript, CardsListTitle, CardsListDropdown, CardsListSlider};