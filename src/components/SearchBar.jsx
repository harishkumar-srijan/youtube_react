import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState();
	const navigate = useNavigate();

	const onhandleSubmit = (e) => {
		e.preventDefault();
		// checks if the search term is available.
		if (searchTerm) {
			navigate(`/search/${searchTerm}`); // navigates to the specified search term.
			setSearchTerm(''); // After navigating, the search term becomes empty.
		}
	};

	return (
		<Paper component='form' onSubmit={onhandleSubmit}>
			<input
				className='search-bar'
				placeholder='search '
				value={searchTerm}
				onChange={(e) => {
					setSearchTerm(e.target.value);
				}}
			/>
			<IconButton
				type='submit'
				sx={{ p: '9px', color: 'black' }}
				aria-label='search'
			>
				<Search />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
