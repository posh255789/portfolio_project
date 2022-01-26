import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ToggleMode from './ToggleMode';

const Header = () => {
	return (
		<HeaderStyless>
			<div className="container">
				<div className="header-content">
					<Link to="/">Welcome To My Portfolio Pages</Link>
					
				</div>
				<ToggleMode />
			</div>
		</HeaderStyless>
		
	);
};

const HeaderStyless = styled.header`
	width: 100%;
	left: 0;
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px 0;
	z-index: 2;

	.header-content {
		
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	a {
		display: flex;
		flex-direction: column;
		font-family: 'Marck Script', cursive;
		text-transform: capitalize;
		font-size: 25px;
		color: white;
	}
`;

export default Header;
