import React from 'react';

const PictureDetails = (props) => (
	<div className="PictureDetails"
		style={{
			backgroundImage: `linear-gradient(to left, transparent 40%, #111 75%), url(${props.picture.image})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center right',
		}}
	>
		<button className="close-btn" onClick={() => props.unsetPictureDetails()}>
			<span className="stroke"></span>
			<span className="stroke"></span>
		</button>

		<div className="details-container">
			<h2>{props.picture.title}</h2>
			<p>{props.picture.description}</p>
			<p>With: {props.picture.casting}</p>
			<p>Director: {props.picture.director}</p>
			<p>Category: {props.picture.category}</p>
		</div>

		<div className="movie-link">
			<button className="icon-container">
				<i className="fa fa-play -icon"></i>
			</button>
		</div>
	</div >
);

export default PictureDetails;