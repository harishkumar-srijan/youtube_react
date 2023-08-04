import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
	params: {
		maxResults: 50,
	},
	headers: {
		'X-RapidAPI-Key': '494968244cmsh754a0aeefb899c9p19f33ajsn4881bd14a1de',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
	},
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};
