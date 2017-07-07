import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Picture from './Picture';
import PictureDetails from './PictureDetails';


class PictureList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1,
			picturesPerPage: 5,
			detailed: null,
		};

		this.setPictureDetails = this.setPictureDetails.bind(this);
		this.unsetPictureDetails = this.unsetPictureDetails.bind(this);
	}

	renderList() {
		const { pictures } = this.props;
		const { currentPage, picturesPerPage } = this.state;

		const indexOfLastPicture = currentPage * picturesPerPage;
		const indexOfFirstPicture = indexOfLastPicture - picturesPerPage;
		const currentPictures = pictures.slice(indexOfFirstPicture, indexOfLastPicture);

		return (
			// <CSSTransitionGroup
			// 	transitionName="pictureTransition"
			// 	transitionEnterTimeout={500}
			// 	transitionLeaveTimeout={300}
			// >

			currentPictures.map((picture, index) => {
				return (
					// 	(this.state.currentPage === index + 1)
					<Picture key={index}
						picture={picture}
						setPictureDetails={this.setPictureDetails} />
					// : null
				);
			})

			// </CSSTransitionGroup >
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

	setPictureDetails(picture) {
		this.setState({
			detailed: picture,
		});
	}

	renderPictureDetails() {
		const { detailed } = this.state;

		return (
			(detailed !== null)
				? <PictureDetails picture={detailed}
					unsetPictureDetails={this.unsetPictureDetails} />
				: null
		)
	}

	unsetPictureDetails() {
		this.setState({ detailed: null });
	}

	render() {
		return (
			<div className="PictureList">
				<h2 className="list-title">{this.props.title}</h2>
				<div className="list-container">
					<button className="arrow-btn" onClick={() => this.previousSlide()}>
						<span>
							<i className="fa fa-chevron-left icon"></i>
						</span>
					</button>

					{this.renderList()}

					<button className="arrow-btn" onClick={() => this.nextSlide()}>
						<span>
							<i className="fa fa-chevron-right icon"></i>
						</span>
					</button>
				</div>
				{this.renderPictureDetails()}
			</div>
		)
	}

}

export default PictureList;