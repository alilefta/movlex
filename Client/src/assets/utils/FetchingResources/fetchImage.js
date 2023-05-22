export const fetchImage = async (size, url) => {
	try {
		const response = await fetch(`https://image.tmdb.org/t/p/w${size}/${url}`);
		const data = await response.blob();
		return data;
	} catch (err) {
		throw new Error(err);
	}
};
