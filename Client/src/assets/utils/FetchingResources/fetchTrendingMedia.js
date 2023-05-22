export const fetchTrendingMedia = async () => {
	try {
		const response = await fetch(
			"https://api.themoviedb.org/3/trending/all/week?api_key=e419e516cb81e4e6b04cf68119a3608d&language=en-US"
		);
		const data = await response.json();
		return data;
	} catch (err) {
		throw new Error(err);
	}
};
