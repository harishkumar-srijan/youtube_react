import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
	return (
		<Box
			sx={{
				boxShadow: 'none',
				borderRadius: '20px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'flex-start',
				width: 'calc(100%)',
				margin: 'auto',
				marginTop: marginTop,
			}}
		>
			{/* on click pass the chanel ID to URL, that we get in channel details page */}
			<Link to={`/channel/${channelDetail?.id?.channelId}`}>
				<CardContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						textAlign: 'center',
						color: '#fff',
					}}
				>
					<CardMedia
						image={
							channelDetail?.snippet?.thumbnails?.high?.url ||
							demoProfilePicture
						}
						alt={channelDetail?.snippet?.channelTitle}
						sx={{
							borderRadius: '50%',
							height: '125px',
							width: '125px',
							margin: '0 auto 16px auto',
						}}
					></CardMedia>
					<Typography variant='h4'>
						{channelDetail?.snippet?.title}
						<CheckCircleIcon
							sx={{ fontSize: '14px', color: '#6598a2', ml: '5px' }}
						/>
					</Typography>
					<Typography variant='h6'>
						{channelDetail?.snippet?.description.slice(0, 100)}
					</Typography>
				</CardContent>
			</Link>
		</Box>
	);
};

export default ChannelCard;
