export const fetchListOfMovies = async () => {
	try {
		const response = await fetch(
			"https://api.themoviedb.org/4/list/1?page=1&api_key=e419e516cb81e4e6b04cf68119a3608d&language=en-US",
			{
				headers: {
					"Content-Type": "application/json",
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDE5ZTUxNmNiODFlNGU2YjA0Y2Y2ODExOWEzNjA4ZCIsInN1YiI6IjYxMmE0ZDk1MDZmOTg0MDA0MzRiYzMxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zYLYHM6XmMpRRj3vVv92ciByzLaLRwVZn5uKTNAADLM",
				},
			}
		);
		const data = await response.json();
		return data;
	} catch (err) {
		throw new Error(err);
	}
};
