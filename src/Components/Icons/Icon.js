function Icon (props) { 			//Добавление иконок и логотипов.
	return (
		<img src={props.name} alt={props.alt} heigth={props.size}/>
	)
} 

export {Icon};