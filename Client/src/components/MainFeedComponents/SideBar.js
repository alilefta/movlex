import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchImage } from "../../assets/utils/FetchingResources/fetchImage";
const SideBar = ({ continueWatching }) => {
	const [images, setImages] = useState([]);
	const [isLoadingContinueWatching, setIsLoadingContinueWatching] =
		useState(true);
	const [isLoadingMyList, setIsLoadingMyList] = useState(true);
	useEffect(() => {
		if (continueWatching.length > 0) {
			const promises = continueWatching.map(async (element) => {
				return await fetchImage(92, element.poster_path)
					.then((blob) => URL.createObjectURL(blob))
					.catch((error) => console.log(error));
			});
			Promise.all(promises).then((results) => {
				setImages(results);
				setIsLoadingContinueWatching(false);
			});
		}
	}, [continueWatching]);
	return (
		<div className="col-sm-3 sidebar-section container">
			<div className="col-sm-12 sidebar-component align-items-start">
				<h3>Continue Watching</h3>
				{!isLoadingContinueWatching ? (
					<ul className="sidebar-component-list">
						{images.map((item, index) => (
							<li key={continueWatching[index].id}>
								<Link
									to={`/${continueWatching[index].media_type}/${continueWatching[index].id}`}
								>
									<img
										className="sidebar-component-img"
										src={item}
										alt={continueWatching[index].title}
									/>
									<h4>{continueWatching[index].title}</h4>
								</Link>
							</li>
						))}
					</ul>
				) : (
					<div className="loading-spinner-min">
						<div className="spinner"></div>
					</div>
				)}
			</div>
			<hr />
			<div className="col-sm-12 sidebar-component align-items-start">
				<h3>My Watching List</h3>
				{!isLoadingMyList ? (
					<ul className="sidebar-component-list">
						{images.map((item, index) => (
							<li key={continueWatching[index].id}>
								<Link
									to={`/${continueWatching[index].media_type}/${continueWatching[index].id}`}
								>
									<img
										className="sidebar-component-img"
										src={item}
										alt={continueWatching[index].title}
									/>
									<h4>{continueWatching[index].title}</h4>
								</Link>
							</li>
						))}
					</ul>
				) : (
					<div className="loading-spinner-min">
						<div className="spinner"></div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SideBar;
