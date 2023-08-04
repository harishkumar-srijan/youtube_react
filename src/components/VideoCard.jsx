import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import {
	demoVideoTitle,
	demoVideoUrl,
	demoChannelUrl,
	demoChannelTitle,
} from '../utils/constants';

const VideoCard = ({
	video: {
		id: { videoId }, // destruture ID
		snippet,
	},
}) => {
	// console.log(videoId, snippet);

	return (
		<Card>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardMedia
					image={snippet?.thumbnails?.high?.url}
					alt={snippet.title}
					sx={{ width: '100%', height: 140 }}
				/>
			</Link>
			<CardContent
				sx={{
					width: 'calc(100% - 32px)',
					backgroundImage: 'linear-gradient(120deg, #fdfde6, #cee5ec)',
					height: '66px',
				}}
			>
				<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
					<Typography
						variant='subtitle2'
						fontWeight='normal'
						marginBottom={0.5}
					>
						{snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 60)}
					</Typography>
				</Link>
				<Link
					to={
						snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl
					}
					className='channel__name'
				>
					<Typography variant='subtitle2' fontWeight='normal' color='gray'>
						{snippet?.channelTitle.slice(0, 50) ||
							demoChannelTitle.slice(0, 60)}
					</Typography>
					<CheckCircleIcon
						sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
					/>
				</Link>
			</CardContent>
		</Card>
	);
};

export default VideoCard;
