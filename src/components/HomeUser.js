import React, { Component } from 'react';
import Picture from './Picture';
import Header from './Header';


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
				<Picture />
			</div>
		)
	}
}

export default HomeUser;