import publicationsInfo from '../../database/PublicationsDB.js';
import React, {useState, useEffect} from 'react';
import {useOutletContext} from "react-router-dom";

function Mentions(props) {
	let searchTarget = useOutletContext();

	let [publicationsVisibility, setPublicationsVisibility] = useState(1);
	function changePublicationsVisibility (a) {
		setPublicationsVisibility(a);
	}

	useEffect(() => {
		setPublicationsVisibility(0);
	}, [searchTarget])


	let publicationInfo = publicationsInfo.map((info, id) => {
		return (
			<div className={"publication-content" + (publicationsVisibility > 0 ? "" : "inactive")}  key={id} >
				<PublicationsItems publicationProp={info} searchTarget={searchTarget} changePublicationsVisibility={changePublicationsVisibility} />
			</div>
		)
	})

	return (
		<div className="publications-mantions-content">
			{publicationInfo}
			{publicationsVisibility > 0 ? "" : <div className="publications-nothing-found">Ничего не найдено</div>}
		</div>
	)

}

function PublicationsItems (props) {
	function handleFunction (a) {
		props.changePublicationsVisibility(a);
	}
	
	useEffect(() => {
		handleFunction(1);
	}, [props.searchTarget])

	let publication = props.publicationProp.publics.map((info, id) => {
		let publicationText = info.name + info.autors + info.description;
		return (
			<div className={"publication " + (publicationText.toLowerCase().includes(props.searchTarget.toLowerCase()) ? "" : "inactive")} key={id}>
				<div className="publication__name publication__item">{info.name}</div>
				<div className="publication__autors publication__item">{info.autors}</div>
				<div className="publication__description publication__item">{info.description}</div>
			</div>	
		)
	})


	let visibleElementsCount = 0;
	publication.forEach((item, id) => {
		if (!item.props.className.includes("inactive")) {
			visibleElementsCount+=1;
		}
	})

	if (visibleElementsCount > 0) {
		setTimeout(() => {
			handleFunction(1);
		});
	}

	return (
		<>	
			<div className={"publication__year " + (visibleElementsCount > 0 ? "" : "inactive")}>{props.publicationProp.year}</div>
			{publication}
		</>	
	)
}


export default Mentions;