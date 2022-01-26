import React, { useEffect } from 'react';
import '../asset/styles/navbar.css'
import $ from 'jquery';
import styled from 'styled-components';
import Icon from'../Lottie/icon.json'
import DisplayLottie from '../components/DisplayLottie';
import { Link, animateScroll as scroll } from "react-scroll";
// import jQuery from 'jquery';
// import firebaseConfig from '../firebase/config'
const Navbar = () => {

    useEffect(() => {
        $("#heart-trigger").click(function () {
            $("li").toggleClass("visible");
         });
    }, []);
    return (
        <div>
             <NavStyled>
       <header>
  <nav role='navigation'>
    <ul>
      <li><Link  to="intro" spy={true} smooth={true} duration={500}  offset={-70}>Itroduce me</Link></li>
      <li><Link  to="edu" spy={true} smooth={true}>Education</Link></li>
      <li id="heart-trigger" class="heart heart-trigger"><span><DisplayLottie animationData={Icon}/></span></li>
      <li><Link  to="skill" spy={true} smooth={true}>Skill</Link></li>
     
      <li><Link  to="talent" spy={true} smooth={true}>Talent</Link></li>
      <li><Link  to="acty" spy={true} smooth={true}>Activity</Link></li>
      {/* <li><Link  to="cert" spy={true} smooth={true}>Certificate</Link></li> */}
    </ul>
  </nav>
</header>
</NavStyled>
</div>
    );
};



const NavStyled = styled.section`



header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: #4A4860;
    border-bottom: 5px solid #323042;
}

nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    @media all and (min-width: 545px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }


    li {
        display: none;
        @media all and (min-width: 545px) {
            display: block;
            color: #FFE4FA;
        }
    }
    a {
        display: block;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-family: Futura, Trebuchet MS, Arial, sans-serif;
        font-size: 1.5em;
        color: #FFE4FA;
        text-align: center;
        padding: 14px 30px;
        transition: background .25s, box-shadow .15s;
        &:hover {
            color: #4A4860;
            background: #FFC4EB;
            box-shadow: 0px 4px 0px 0px #BB8EAC;
        }
        @media all and (min-width: 545px) {
            padding: 20px;
        }
    }

}

.heart {
    display: none;
    margin: 0 auto;
    padding: 12px 30px;
    @media all and (min-width: 545px) {
        display: block;
        margin: initial;
    }
}

.heart-trigger {
    display: block;
    order: -1;
    padding: 12px 30px;
    @media all and (min-width: 545px) {
        order: initial;
        width: 110px;
    }
}

.visible {
    display: block;
    transform: scale(1);
}

.fa-heart {
    font-size: 1.8em;
    color: #FFC4EB;
    transition: all .2s ease-in-out;
    &:hover {
        color: #DE6E4B;
        transform: scale(1.3);
    }
    @media all and (min-width: 545px) {
        font-size: 1.2em;
    }
}

`;

export default Navbar;





{/* <button onClick={() => firebaseConfig.auth().signOut()} class="btn btn-danger">Sign Out</button> */ }