import React from 'react';
import styled from 'styled-components';
import facebook from '../asset/images/facebook.svg';
import twitter from '../asset/images/twitter.svg';
import github from '../asset/images/github.svg';
import DisplayLottie from '../components/DisplayLottie';
import Findme from'../Lottie/findme.json'
import Line from'../Lottie/line.json'
const SocialMedia = () => {
	return (
		<SocialMediaStyled>
			<span>Find Me On</span>
            <div className="line">
						<DisplayLottie animationData={Line} />
					</div>
            <div className="findme">
						<DisplayLottie animationData={Findme} />
					</div>
			<ul>
				<li>
					<a href="https://twitter.com/PoshTC25" rel="noreferrer" target="_blank">
						<img src={twitter} alt="Twitter" />
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/profile.php?id=100010193262635" rel="noreferrer" target="_blank">
						<img src={facebook} alt="Facebook" />
					</a>
				</li>
				<li>
					<a href="https://github.com/posh255789" rel="noreferrer" target="_blank">
						<img src={github} alt="Github" />
					</a>
				</li>
			</ul>
		</SocialMediaStyled>
	);
};

const SocialMediaStyled = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 40px;
	span {
		-webkit-text-stroke-width: 0.5px;
		-webkit-text-stroke-color: rgb(69,104,220);
		font-family: Blippo, fantasy;
		display: block;
		font-size: 30px;
		color: white;
		font-weight: 200;
		margin-bottom: 10px;
        padding-left: 55px;
	}
	ul {
		display: flex;
		align-items: center;
		li {
			margin-right: 13px;
			transition: all 0.5s;
			border-radius: 50%;
			width: 5.375rem;
	
			a {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 3.375rem;
				height: 3.375rem;
				padding: 0;
				box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 15%);
				border-radius: 60%;
                
			}
			&:first-child {
				a {
					color: #fff;
					background-color: #1da1f2;
					border-color: #1da1f2;
				}
			}
            
			&:nth-of-type(2) {
				a {
					background-color: #3b5999;
					border-color: #3b5999;
				}
			}
			&:nth-of-type(3) {
				a {
					background-color: #222;
					border-color: #222;
				}
			}
			&:hover {
				box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
				transform: translateY(-1px);
			}
		}
	}
`;

export default SocialMedia;
