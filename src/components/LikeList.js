import React from 'react';

const LikeList = () => (
	<ul className="LikeList">
		<li>
			<span className="icon-container">
				<i className="fa fa-thumbs-o-up -icon"></i>
			</span>
		</li>
		<li>
			<span className="icon-container">
				<i className="fa fa-thumbs-o-down -icon"></i>
			</span>
		</li>
		<li>
			<span className="icon-container">
				<i className="fa fa-plus -icon"></i>
			</span>
		</li>
	</ul>
);

export default LikeList;