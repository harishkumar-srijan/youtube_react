import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
	return (
		<Stack
			direction='row'
			sx={{
				overflowY: 'auto',
				height: { sx: 'auto', md: '95%' },
				flexDirection: { md: 'column' },
				flexBasis: '20%',
			}}
		>
			{categories.map((category) => (
				<button
					key={category.name}
					className='category-btn'
					onClick={() => setSelectedCategory(category.name)}
					style={{
						background: category.name === selectedCategory && '#fc1503', // condition active category color
						color: category.name === selectedCategory ? 'white' : 'red',
					}}
				>
					<span
						style={{
							color: category.name === selectedCategory ? 'white' : 'red', // condition active category color
							marginRight: '10px',
						}}
					>
						{category.icon}
					</span>
					<span
						style={{ color: category.name === selectedCategory ? '1' : '.3' }}
					>
						{category.name}
					</span>
				</button>
			))}
		</Stack>
	);
};

export default SideBar;
