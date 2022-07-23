import directionsDB from '../../database/DirectionsDB.js'; 
import {useState} from 'react';
import React from 'react'
import directionsArrow from '../../img/DirectionsCardsList/directionsArrow.png';
import slider_arrow__left from "../../img/DirectionsCardsList/slider_arrow__left.png";
import slider_arrow__right from "../../img/DirectionsCardsList/slider_arrow__right.png"; //импорт стрелок для слайдера DirectionsListSlider

function Directions() {
	function DirectionsElem(props) {
		let [directionsVisibility, changeDirectionsVisibility] = useState(false);
		return (
			<>
				<div className="directions-dropdown" onClick={() => {changeDirectionsVisibility(!directionsVisibility);}}>
					<div className={"dropdown-button " + (directionsVisibility === true ? "dropdown-button--active" : "")}> 
						<img className="dropdown-button__img" src={directionsArrow} alt="img"/> 
					</div>
					<DirectionsDropdown directionsProps={props.directionsListProps}/>
				</div>
				<div className={"directions-elem " + (directionsVisibility === true ? "directions-elem--active" : "inactive")}>
					<DirectionsSlider directionsProps={props.directionsListProps}/>
					<div className="directions-descript directions-inner">
						<DirectionsTitle directionsProps={props.directionsListProps}/>
						<DirectionsDescript directionsProps={props.directionsListProps}/>
					</div>	
				</div>
			</>
		)
	}
	function DirectionsListInfo() {
		let directionsListInfo = directionsDB.map((item, id) => {	
				return (
					<div className="directions-list-element" key={id}>
						<DirectionsElem directionsListProps={directionsDB[id]}/>
					</div>
				) 
			}
		)
		return (
			<>
				{directionsListInfo}
			</>
		)
	}


	return (
		<main className="main-directions container">
			<DirectionsListInfo/>
		</main>	
	)
}

function DirectionsDescript (props) {
	return (
		<p className="directions-text directions-inner">{props.directionsProps.text}</p>
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
			<img className="directions-slider__img--zoomed" src={props.activeSlide} alt="sliderImage"/>
		</div>
	)
}

function DirectionsSlider(props) {
	const [isZoomed, setZoom] = useState(false);
	const [activeSlide, setActiveSlide] = useState(0);
	let [currentSlide, setSlide] = useState(1)


	function nextSlide() {
		currentSlide >= props.directionsProps.links.length ? setSlide(1) : setSlide(currentSlide + 1);
	}

	function prevSlide() {
		currentSlide <= 1 ? setSlide(props.directionsProps.links.length) : setSlide(currentSlide - 1);
	}
 
	return (
		<>
			<div className="directions-inner directions-slider" src={props.directionsProps.link}>
				<div className="directions-slider__arrow directions-arrow-left" onClick={prevSlide}>
					<img src={slider_arrow__left} alt="slider_arrow__left"/>
				</div>
				<div className="directions-slider-body" onClick={() => {setZoom(true); setActiveSlide(props.directionsProps.links[currentSlide - 1])}}>
					<img className={"directions-slider-image "} src={props.directionsProps.links[currentSlide - 1]} alt="illustration"/>
				</div>	
				<div className="directions-slider__arrow directions-arrow-right" onClick={nextSlide}>
					<img src={slider_arrow__right} alt="slider_arrow__right"/>
				</div>
			</div>	
			<div className={"directions-zoom-background " + (isZoomed === true ? "shadowBack" : "")} onClick={() => setZoom(!isZoomed)}></div>
			<ZoomSlide activeSlide={activeSlide} isZoomed={isZoomed}/>
		</>
	)
}


export default Directions;