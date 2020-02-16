import React from "react";

const Card = ({ id, name, email }) => {
	return (
		<div className="bg-light-blue dib br3 pa3 ma2 h10  grow bw4 shadow-5">
			<img src={`https://robohash.org/ ${id}randomPic?200*200`} alt="photos" />
			<div>
				<h1> {name}</h1>
				<p> {email}</p>
			</div>
		</div>
	);
};

export default Card;
