import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Auth'
import styled from 'styled-components';
import Shapes from '../components/Shapes';
import Header from '../components/Header';
import Data from'../Lottie/data.json'
import DisplayLottie from '../components/DisplayLottie';
import SocialMedia from '../components/SocialMedia'
import '../asset/styles/loginbutt.css'
import '../asset/styles/signupbutt.css'
import '../asset/styles/card.css'

const Home = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <>
            <div className="">
                <Header />
            </div>
            <HeroStyled className="hero-section">
                <Shapes />
                <div className="container hero-text">
                    <div className="left-side">
					<div className="card">
                        <h4>Hello there. I'm</h4>
                        <h3>Theeraphat Claisuban</h3>
                        <h2>My Nick Name "Posh"</h2>
                        <p>This Is My Portfolio Website</p>
					</div>
                        <SocialMedia />
                       
                         {currentUser ? (
                        <p>You are logged in - <Link to="/dashboard">View Dashboard</Link></p>
                    ) : (
                        <p>
                             <Link to="/login"class="button button-62" role="button">Log In</Link> Or <Link to="/signup" className="button button-30">Sign Up</Link>
                             {/* <button class="button-36" role="button">Button 36</button> */}
                        </p>
                    )}
                    </div>
                    <div className="right-side">
						<DisplayLottie animationData={Data} />
					</div>
                </div>
            </HeroStyled>
        </>
    )
}

const HeroStyled = styled.section`
	position: relative;
	height: 100vh;
	display: flex;
	align-items: center;
	background: linear-gradient(35deg, #11cdef, #1171ef) !important;
	z-index: 1;
	.hero-text {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.left-side {
			display: flex;
			flex-direction: column;
			
		.card{
			opacity: 0.9;
			box-shadow: 25px 40px 15px 0 rgba(0, 0, 0, 0.2);
			padding: 16px;
			border-radius: 15px 50px 30px 5px;
			background: rgb(69,104,220);
			background: linear-gradient(97deg, rgba(69,104,220,1) 0%, rgba(176,106,179,1) 100%);
			h4 
			font-family: "Arial", Helvetica, sans-serif;
			font-style: italic;
			font-weight: bold;,
			p {
				font-family: serif;
				font-size: 30px;
				color: white;
				font-weight: 200;
				padding-left: 30px;
			}
			h3 {
				font-size: 50px;
				color: white;
				margin-bottom: 10px;
                font-weight : bold;
			}

            h2 {
				font-family: serif;
				font-size: 30px;
				color: #ED9F0C;
				font-weight: 200;
			}
		}
		}

		.right-side {
			width: 700px;
			max-width: 100%;
			display: flex;
			flex-direction: column;
		}

        .findme {
			max-width: 40%;
            padding-left: 60px;
			display: flex;
			flex-direction: column;
		}

        .line {

            padding: 0;
            margin-bottom: 0;
            margin-top: 0px;
            width : 190px;
            margin-left: 35px;: 
			display: flex;
			flex-direction: column;
		}
	}
	@media screen and (max-width: 768px) {
		height: 100%;
		padding-bottom: 100%;
		padding-top: 160px;
		.hero-text {
			flex-direction: column;
		}
	}
`;


export default Home;









