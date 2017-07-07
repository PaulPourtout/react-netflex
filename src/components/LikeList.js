import React from 'react';

const LikeList = () => (
	<ul className="LikeList">
		<li>
			<button className="icon-container">
				<i className="fa fa-thumbs-o-up -icon"></i>
			</button>
		</li>
		<li>
			<button className="icon-container">
				<i className="fa fa-thumbs-o-down -icon"></i>
			</button>
		</li>
		<li>
			<button className="icon-container">
				<i className="fa fa-plus -icon"></i>
			</button>
		</li>
	</ul>
);

export default LikeList;