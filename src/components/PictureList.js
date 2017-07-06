import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Picture from './Picture';


class PictureList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1,
			picturesPerPage: 5,
		};
	}

	renderList() {
		const { pictures } = this.props;
		const { currentPage, picturesPerPage } = this.state;

		const indexOfLastPicture = currentPage * picturesPerPage;
		const indexOfFirstPicture = indexOfLastPicture - picturesPerPage;
		const currentPictures = pictures.slice(indexOfFirstPicture, indexOfLastPicture);

		return (
			currentPictures.map((picture, index) => {
				return (
					// 	(this.state.currentPage === index + 1)
					<Picture key={index} title={picture.title} image={picture.image} />
					// : null
				);
			})
		)
	}

	nextSlide() {
		const { currentPage, picturesPerPage } = this.state;
		const { pictures } = this.props;

		const lastPage = Math.ceil(pictures.length / picturesPerPage);

		(currentPage < lastPage)
			? this.setState({ currentPage: currentPage + 1 })
			: this.setState({ currentPage: 1 })
	}

	previousSlide() {
		const { currentPage, picturesPerPage } = this.state;
		const { pictures } = this.props;

		const lastPage = Math.ceil(pictures.length / picturesPerPage);

		(currentPage > 1)
			? this.setState({ currentPage: currentPage - 1 })
			: this.setState({ currentPage: lastPage })
	}

	render() {
		return (
			<div className="PictureList">
				<h2>{this.props.title}</h2>
				<div className="list-container">
					<button className="arrow-btn" onClick={() => this.previousSlide()}>
						<span>
							<i className="fa fa-chevron-left icon"></i>
						</span>
					</button>
					{/*<CSSTransitionGroup
						transitionName="pictureTransition"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300}
					>*/}
					{this.renderList()}
					{/*</CSSTransitionGroup>*/}
					<button className="arrow-btn" onClick={() => this.nextSlide()}>
						<span>
							<i className="fa fa-chevron-right icon"></i>
						</span>
					</button>
				</div>
			</div>
		)
	}

}

export default PictureList;