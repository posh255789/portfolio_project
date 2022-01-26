import React from 'react'
import '../asset/styles/hompage.css'
import ReactTypingEffect from 'react-typing-effect'
import styled from 'styled-components';
import '../components/navbar';
const Hompage = () => {
    return (
        <>
        <div class="bodyhomepage">
        <div class="texteff" id="intro">
                <ReactTypingEffect text={['Hi! Everyone', 'I am Theeraphat']} speed={80} classname="typingeffect"></ReactTypingEffect>
            </div>
        <div class="wrapper">
    <div class="profile">
        <div class="overlay">
            <div class="about d-flex flex-column">
                <h4>Posh Theeraphat</h4> <span>Software Developer</span>
            </div>
            <ul class="social-icons">
                <li><i class="fa fa-facebook"></i></li>
                <li><i class="fa fa-linkedin"></i></li>
                <li><i class="fa fa-twitter"></i></li>
                <li><i class="fa fa-instagram"></i></li>
            </ul>
        </div>
    </div>
</div>
</div>
<div class="cardinfo" id="">
        <Cardinfo>
        <section class="page-contain">
  <a href="#" class="data-card">
    <h3>01</h3>
    <h4>My Nick Name</h4>
    <p>Posh</p>
    <span class="link-text">
      Hold To View Inside
      <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
</svg>
    </span>
  </a>
  <a href="#" class="data-card">
    <h3>02</h3>
    <h4>My College</h4>
    <p>Mahasrakham</p>{"\n"}
    <span class="link-text">
      View Information
      <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
</svg>
    </span>
  </a>
</section>
</Cardinfo>

</div>

        </>
    )
}

const Cardinfo = styled.section`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&display=swap');

* {
  box-sizing: border-box;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-twitter {
  background: #55ACEE;
  color: white;
}


.fa-github {
  background: white;
  color: black;
}



.page-contain {
  display: flex;
  z-index: 500;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  position:relative; 
  bottom: 20rem;
}


.data-card {
  display: flex;
  flex-direction: column;
  max-width: 20.75em;
  min-height: 20.75em;
  overflow: hidden;
  border-radius: .5em;
  text-decoration: none;
  background: white;
  margin: 1em;
  padding: 2.75em 2.5em;
  box-shadow: 0 1.5em 2.5em -.5em rgba(#000000, .1);
  transition: transform .45s ease, background .45s ease;
  
  h3 {
    color: #2E3C40;
    font-size: 3.5em;
    font-weight: 600;
    line-height: 1;
    padding-bottom: .5em;
    margin: 0 0 0.142857143em;
    border-bottom: 2px solid #753BBD;
    transition: color .45s ease, border .45s ease;
  }

  .hr {
    height: 145px;
    background: white;
  }

  h4 {
    color: #627084;
    text-transform: uppercase;
    font-size: 1.125em;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.1em;
    margin: 0 0 1.777777778em;
    transition: color .45s ease;
  }

  p {
    opacity: 0;
    color: #FFFFFF;
    font-weight: 600;
    line-height: 1.8;
    margin: 0 0 1.25em;
    font-size: 1.5em;
    transform: translateY(-1em);
    transition: opacity .45s ease, transform .5s ease;
  }

  .link-text {
    display: block;
    color: #753BBD;
    font-size: 1.125em;
    font-weight: 600;
    line-height: 1.2;
    margin: auto 0 0;
    transition: color .45s ease;

    svg {
      margin-left: .5em;
      transition: transform .6s ease;
      
      path {
        transition: fill .45s ease;
      }
    }
  }
  
  &:hover {
    background: #753BBD;
    transform: scale(1.02);
    
    h3 {
      color: #FFFFFF;
      border-bottom-color: #A754C4;
    }

    h4 {
      color: #FFFFFF;
    }

    p {
      opacity: 1;
      transform: none;
    }

    .link-text {
      color: #FFFFFF;

      svg {
        animation: point 1.25s infinite alternate;
        
        path {
          fill: #FFFFFF;
        }
      }
    }
  }
}

@keyframes point {
  0% {
   transform: translateX(0);
  }
  100% {
    transform: translateX(.125em);
  }
}
`;

export default Hompage;