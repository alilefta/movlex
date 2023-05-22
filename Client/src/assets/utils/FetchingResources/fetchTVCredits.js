export const fetchTVCredits = async (tv_id) => {
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
			`https://api.themoviedb.org/3/tv/${tv_id}/credits?language=en-US`,
			options
		);
		const data = await response.json();
		return data;
	} catch (err) {
		throw new Error(err);
	}
};
