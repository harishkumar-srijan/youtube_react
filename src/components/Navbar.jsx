import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assest/logo.png';
import logosm from '../assest/logo-sm.png';
import SearchBar from './SearchBar';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ toggleClass }) => {
	const handleClick = () => {
		toggleClass();
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='open drawer'
						sx={{ mr: 2 }}
						onClick={handleClick}
					>
						<MenuIcon />
					</IconButton>

					<Link
						to='/'
						component='div'
						style={{
							flexGrow: 1,
							alignItems: 'center',
							display: { xs: 'block', sm: 'none' },
						}}
						className='logosm'
					>
						<img src={logosm} alt='logo' height='25' />
					</Link>

					<Link
						to='/'
						component='div'
						style={{
							flexGrow: 1,
							alignItems: 'center',
							display: { xs: 'none', sm: 'block' },
						}}
						className='logo'
					>
						<img src={logo} alt='logo' height='25' />
					</Link>

					<SearchBar />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
