import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';
import { Videos, ChannelCard } from './index';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = ({ marginTop }) => {
	const { id } = useParams(); // retrieves the channel ID from the URL and sets it as the ID.
	const [channelDetails, setChannelDetails] = useState(); // channelDetails state
	const [videos, setVideos] = useState(null); // videos state

	useEffect(() => {
		// channel info fetch API
		fetchFromAPI(`channels?part=snippet&id=${id}`).then(
			(data) => setChannelDetails(data?.items[0]) // data is passed to the channelDetails state
		);
		// search videos fetch API
		fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
			(videosData) => setVideos(videosData?.items) // data is passed to the video state
		);
	}, [id]); // ID, channelDetail dependency is defined as an array.

	return (
		<Box minHeight='95vh'>
			<Box>
				<div
					style={{
						height: '250px',
						background:
							'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
						zIndex: 10,
					}}
				/>
				<ChannelCard channelDetail={channelDetails} marginTop={'-93px'} />
			</Box>
			<Box p={2} display='flex'>
				<Box />
				<Videos videos={videos} />
			</Box>
		</Box>
	);
};

export default ChannelDetail;
