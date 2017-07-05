import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			browse: false,
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
							</li>
							<li>
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
							</li>
							<li>
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
							</li>
							<li>
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
				<h1>Netflex</h1>
				<ul className="-nav-left">
					<li>
						<button onClick={() => this.handleBrowseDisplay()}
						>Browse</button>
						{this.renderBrowseMenu()}
					</li>
				</ul>

				<ul className="-nav-right">
					<li>
						<input type="text" placeholder="Titre, personne, genre" />
					</li>
					<li>
						<FontAwesome name="user" />
					</li>
				</ul>
			</div>
		);
	}
}
export default Header;