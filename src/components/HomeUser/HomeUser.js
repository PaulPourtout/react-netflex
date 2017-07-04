import React, { Component } from 'react';
import Picture from '../Picture/Picture';


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
				<Picture />
			</div>
		)
	}
}

export default HomeUser;