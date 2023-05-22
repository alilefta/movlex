// https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1
export const fetchSimilarTvs = async (tv_id) => {
	try {
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization:
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDE5ZTUxNmNiODFlNGU2YjA0Y2Y2ODExOWEzNjA4ZCIsInN1YiI6IjYxMmE0ZDk1MDZmOTg0MDA0MzRiYzMxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zYLYHM6XmMpRRj3vVv92ciByzLaLRwVZn5uKTNAADLM",
			},
		};
		const response = await fetch(
			`https://api.themoviedb.org/3/tv/${tv_id}/similar?language=en-US&page=1`,
			options
		);
		const data = await response.json();
		return data;
	} catch (err) {
		throw new Error(err);
	}
};
