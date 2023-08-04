import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Box, Typography } from '@mui/material';
import { Videos } from './index';

const SearchFeed = () => {
	const [videos, setVideos] = useState([]); // The state is defined to manage the video set.
	const { searchTerm } = useParams(); // The search term is passed through the search box and set.

	// console.log(searchTerm);

	// To retrieve search results using the Fetch API, the 'searchTerm' parameter is passed.
	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
			setVideos(data.items);
		});
	}, [searchTerm]);

	return (
		<Box p={2} minHeight='95vh'>
			<Typography variant='h5' fontWeight='bold' mb={2}>
				<span style={{ color: '#646161' }}>
					Search Results for {searchTerm}
				</span>
			</Typography>

			<Box display='flex'>
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default SearchFeed;
