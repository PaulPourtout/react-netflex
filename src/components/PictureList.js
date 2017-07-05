import React, { Component } from 'react';
import Picture from './Picture';


class PictureList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			pictures: [
				{
					title: "King Kong",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!"
				},
				{
					title: "Godzilla",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!"
				},
				{
					title: "Fourmiz",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!"
				},
				{
					title: "La Vache",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!"
				},
				{
					title: "La Vache",
					description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere harum, rerum. Alias non a distinctio. Cum molestias, asperiores vero quia reiciendis sapiente quibusdam quod molestiae ratione beatae ipsa deserunt!"
				},
			]
		};
	}

	renderList() {
		const { pictures } = this.state;
		return (

			pictures.map(picture => {
				return (
					<Picture title={picture.title} />
				);
			})
		)
	}

	render() {
		return (
			<div className="PictureList">
				<h3>{this.props.title}</h3>
				<div className="list-container">
					<button>
						<span>
							<i className="fa fa-chevron-left icon"></i>
						</span>
					</button>
					{this.renderList()}
					<button>
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