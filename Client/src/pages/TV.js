import React from "react";
import { useParams } from "react-router-dom";
const TV = () => {
	const { id } = useParams();
	return (
		<div className="media-container container-fluid">
			<div className="media row">
				<div className="player col-sm-12">player</div>
				<div className="media-details col-sm-12">description section</div>
				<div className="media-comments col-sm-12">comments section</div>
			</div>
		</div>
	);
};

export default TV;
