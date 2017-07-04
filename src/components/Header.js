import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			browse: true,
		}
	}


	handleBrowseDisplay() {
		const browse = !this.state.browse;
		this.setState({ browse });
	}

	renderBrowseMenu() {
		return (
			(this.state.browse)
				? (
					<div className="-browse-menu">
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/">My List</Link></li>
						</ul>
						<ul>
							<li>
								<Link to="/">Comedie</Link>
								<li>
								</li>
								<Link to="/">Horror</Link>
							</li>
							<li>
								<Link to="/">SF</Link>
							</li>
							<li>
								<Link to="/">Series</Link>
							</li>
						</ul>
						<ul>
							<li>
								<Link to="/">Comedie</Link>
								<li>
								</li>
								<Link to="/">Horror</Link>
							</li>
							<li>
								<Link to="/">SF</Link>
							</li>
							<li>
								<Link to="/">Series</Link>
							</li>
						</ul>
					</div>
				)
				: null
		)
	}

	render() {

		return (
			<div className="Header">
				<ul className="-nav-left">
					<li>
						<h1>Netflex</h1>
					</li>
					<li>
						<button onClick={() => this.handleBrowseDisplay()}
						>Browse</button>
						{this.renderBrowseMenu()}
					</li>
				</ul>

				<ul className="-nav-right">
					<li>
						<input type="text" placeholder="Rechercher" />
					</li>
					<li>
						<p>User name</p>
					</li>
				</ul>
			</div>
		);
	}
}
export default Header;