import React, { Component } from 'react';
// import Picture from './Picture';
import Header from './Header';
import PictureList from './PictureList';

class HomeUser extends Component {
	constructor(props) {
		super(props);
		this.state = {
			etat: true,
		}
	}

	render() {
		return (
			<div className="HomeUser">
				<Header />
				<div className="-container">
					<PictureList title="My list" />
				</div>
			</div>
		)
	}
}

export default HomeUser;