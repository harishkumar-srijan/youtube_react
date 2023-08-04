import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard, Loader } from './';

const Videos = ({ videos, direction }) => {
	// console.log('videos ' + videos);

	if (!videos?.length) return <Loader />;
	return (
		<Stack flexWrap='wrap' justifyContent='start' alignItems='start' gap={2}>
			<Stack
				direction={direction || 'row'}
				flexWrap='wrap'
				justifyContent='start'
				alignItems='start'
				gap={2}
				className='video__wrapper'
			>
				{videos.map((item, idx) => (
					<Box key={idx}>
						{item.id.channelId && <ChannelCard channelDetail={item} />}
						{item.snippet.title ? (
							<VideoCard video={item} />
						) : (
							<VideoCard video={item} sx={{ display: 'none' }} />
						)}
					</Box>
				))}
			</Stack>
		</Stack>
	);
};

export default Videos;
