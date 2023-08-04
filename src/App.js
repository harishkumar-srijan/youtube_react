import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import {
	Navbar,
	SearchFeed,
	VideoDetail,
	Feed,
	ChannelDetail,
} from './components';

const App = () => {
	const [isClassToggled, setIsClassToggled] = useState(false);

	const toggleClass = () => {
		setIsClassToggled(!isClassToggled);
	};

	return (
		// Routes Define
		<BrowserRouter>
			<Box
				sx={{ backgroundImage: 'linear-gradient(120deg, #fafaf3, #cee5ec)' }}
			>
				<Navbar isClassToggled={isClassToggled} toggleClass={toggleClass} />
				<Routes>
					<Route
						path='/'
						exact
						element={
							<Feed isClassToggled={isClassToggled} toggleClass={toggleClass} />
						}
					/>
					<Route path='/video/:id' element={<VideoDetail />} />
					<Route path='/channel/:id' element={<ChannelDetail />} />
					<Route path='/search/:searchTerm' element={<SearchFeed />} />
				</Routes>
			</Box>
		</BrowserRouter>
	);
};

export default App;
