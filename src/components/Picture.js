import React, { Component } from 'react';
import LikeList from './LikeList';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Picture extends Component {

	render() {
		const { picture, setPictureDetails } = this.props;

		const backgroundPicture = {
			backgroundImage: `url(${picture.image})`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
		}

		return (
			<div className="Picture" style={backgroundPicture}>

				<Link to="/" className="play-container">
					<span className="-content">
						<i className="fa fa-play -icon"></i>
					</span>
				</Link>
				<button className="details-container"
					onClick={() => setPictureDetails(picture)}>
					<h3>{picture.title}</h3>
					<span className="-arrow">
						<i className="fa fa-angle-down"></i>
					</span>
				</button>
				<LikeList />

			</div>
		)
	}
}

export default Picture;