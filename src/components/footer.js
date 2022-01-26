import React,{useEffect} from 'react'
import $ from 'jquery';
import styled from 'styled-components';
import '../components/navbar';
import Anime, { anime } from 'react-anime';
// import Img1 from '../asset/images/imgintro.jpg'
const Footer = () => {

    useEffect(() => {
        
    
    }, []);
      
    return (
        <>
        <div class="caroselcust">
            <Foot>
            <section class="contact-area" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">

                        <div class="contact-social">
                            <ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
    <footer>
        <p>Copyright &copy; 2019  All Rights Reserved.</p>
    </footer>
</Foot>
</div>

        </>
    )
}

const Foot = styled.section`

section {
    padding: 60px 0;
    bottom:0px;
    min-height: 100%;
    margin-bottom: -130px;
   /* min-height: 100vh;*/
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.contact-area {
border-bottom: 1px solid #353C46;
}

.contact-content p {
font-size: 15px;
margin: 30px 0 60px;
position: relative;
}


.fa {
    padding: -3px;
    font-size: 30px;
    width: 30px;
    text-align: center;
    text-decoration: none;
    margin: 5px 2px;
    border-radius: 50%;
  }
  
  


.contact-content p::after {
background: #353C46;
bottom: -30px;
content: "";
height: 1px;
left: 50%;
position: absolute;
transform: translate(-50%);
width: 80%;
}

.contact-content h6 {
color: #8b9199;
font-size: 15px;
font-weight: 400;
margin-bottom: 10px;
}

.contact-content span {
color: #353c47;
margin: 0 10px;
}

.contact-social {
margin-top: 30px;
}

.contact-social > ul {
display: inline-flex;
}

.contact-social ul li a {
border: 1px solid #8b9199;
color: #8b9199;
display: inline-block;
height: 40px;
margin: 0 10px;
padding-top: 7px;
transition: all 0.4s ease 0s;
width: 40px;
}

.contact-social ul li a:hover {
border: 1px solid #FAB702;
color: #FAB702;
}

.contact-content img {
max-width: 210px;
}

section, footer {
background: #1A1E25;
color: #868c96;
}

footer p {
padding: 5px 0;
text-align: center;
font-size: 15px;
}

footer img {
width: 44px;
}
`;

export default Footer;