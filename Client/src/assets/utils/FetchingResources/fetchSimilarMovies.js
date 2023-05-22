// https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1
export const fetchSimilarMovies = async (movie_id) => {
	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=e419e516cb81e4e6b04cf68119a3608d&language=en-US&page=1`
		);
		const data = await response.json();
		return data;
	} catch (err) {
		throw new Error(err);
	}
};
