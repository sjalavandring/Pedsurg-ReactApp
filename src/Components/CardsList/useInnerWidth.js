import {useState, useLayoutEffect} from 'react'

function useInnerWidth () {
	let [width, setWidth] = useState(window.innerWidth);
	useLayoutEffect(() => {
		window.addEventListener('resize', () => setWidth(window.innerWidth));
	}, [])
	return width;
}
// Хук useInnerWidth возвращает динамически меняющуюся ширину экрана, под которую подстраивается рендер компонента 
//Используется для корректного отображения элементов при масштабировании размеров экрана

export default useInnerWidth;

