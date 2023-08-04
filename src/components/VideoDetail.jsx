import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Loader, Videos } from './index';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const VideoDetail = () => {
	const { id } = useParams();
	const [videoDetail, setVideoDetail] = useState([]);
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromAPI(`videos?part=,statistics&id=${id}`).then((data) =>
			setVideoDetail(data.items[0])
		);
		fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
			(data) => setVideos(data.items)
		);
	}, [id]);

	if (!videoDetail?.snippet) return <Loader />;

	return (
		<Box minHeight='95vh'>
			<Stack direction={{ xs: 'column', md: 'row' }}>
				<Box flex={1}>
					<Box
						sx={{
							width: { xs: 'auto', lg: '97%' },
							position: 'sticky',
							top: '10px',
							left: '10px',
							background: 'black',
							padding: '15px',
							backgroundImage: 'linear-gradient(120deg, #fdfde6, #cee5ec)',
						}}
					>
						<ReactPlayer
							url={`https://youtube.com/watch?v=${id}`}
							controls
							className='react-player'
						/>
						<Typography variant='h5' fontWeight='bold' px={2} pt={2} pb={1}>
							{videoDetail.snippet.title}
						</Typography>
						<Box className='video__detail-text-wrapper'>
							<Stack
								direction='row'
								justifyContent='space-between'
								sx={{ color: 'black' }}
								py={1}
								px={2}
							>
								<Link to={`/channel/${videoDetail.snippet.channelId}`}>
									<Typography>
										{videoDetail.snippet.channelTitle}
										<CheckCircleIcon
											sx={{
												fontSize: '16px',
												color: '#6598a2',
												ml: '5px',
												mt: '3px',
												display: 'inline-block',
											}}
										/>
									</Typography>
								</Link>
							</Stack>
							<Stack direction='row' gap='20px' alignItems='center'>
								<Typography variant='body1' sx={{ opacity: 0.7 }}>
									{parseInt(videoDetail.statistics.viewCount).toLocaleString()}
									Views
									<VisibilityIcon sx={{ fontSize: '16px', pt: '0px' }} />
								</Typography>

								<Typography variant='body1' sx={{ opacity: 0.7 }}>
									{parseInt(videoDetail.statistics.likeCount).toLocaleString()}
									Likes <ThumbUpIcon sx={{ fontSize: '16px', pt: '0px' }} />
								</Typography>
							</Stack>
						</Box>
					</Box>
				</Box>
				<Box
					px={2}
					py={{ md: 1, xs: 5 }}
					justifyContent='center'
					alignItems='center'
					className='video__details--related'
				>
					<Videos videos={videos} direction='column' />
				</Box>
			</Stack>
		</Box>
	);
};

export default VideoDetail;
