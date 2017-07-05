import React, { Component } from 'react';
import LikeList from './LikeList';


class Picture extends Component {

	render() {
		return (
			<div className="Picture">
				<div className="play-container">
					<span className="-content">
						<i className="fa fa-play -icon"></i>
					</span>
				</div>
				<div className="details-container">
					<h3>{this.props.title}</h3>
					<span className="-arrow">
						<i className="fa fa-angle-down"></i>
					</span>
				</div>
				<LikeList />
			</div>
		)
	}
}

export default Picture;