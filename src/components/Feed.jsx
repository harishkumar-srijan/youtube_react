import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { SideBar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = ({ isClassToggled }) => {
	const [selectedCategory, setSelectedCategory] = useState('All'); // define catagary state
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
			setVideos(data.items)
		);
	}, [selectedCategory]);

	// console.log('Feed' + videos);
	return (
		<Stack className='video__container'>
			<Box
				sx={{
					height: { sx: 'auto', md: '92vh' },
					boxShadow:
						'0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
				}}
				className={
					isClassToggled
						? 'video__container--sidebar menu__open'
						: 'video__container--sidebar'
				}
			>
				<SideBar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
					isClassToggled={isClassToggled}
				/>
			</Box>
			<Box
				className={
					isClassToggled
						? 'video__container--video-list menu__open'
						: 'video__container--video-list'
				}
			>
				<Box className='video__container--title'>
					<Typography
						variant='h5'
						fontWeight='bold'
						mb={2}
						sx={{ color: 'white' }}
					>
						<span style={{ color: '#646161' }}> {selectedCategory} Videos</span>
					</Typography>
				</Box>
				<Box>
					<Videos videos={videos} />
				</Box>
			</Box>
		</Stack>
	);
};

export default Feed;
