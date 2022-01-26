import styled from 'styled-components';
import React, { useEffect } from 'react';
import '../asset/styles/infomation.css'
import '../components/navbar';
import ReactPlayer from "react-player"
const Infomation = () => {
    useEffect(() => {
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
          
            for (var i = 0; i < reveals.length; i++) {
              var windowHeight = window.innerHeight;
              var elementTop = reveals[i].getBoundingClientRect().top;
              var elementVisible = 150;
          
              if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
              } else {
                reveals[i].classList.remove("active");
              }
            }
          }
          
          window.addEventListener("scroll", reveal);
    
    }, []);
    return (
<div class="infocust" id="infocust">
    <Infos>
  <section>
      </section>
      <section id="edu">
        <div class="container reveal fade-bottom" >
          <h2>Education</h2>
          <div class="text-container">
            <div class="text-box">
              <h3>Junior High School</h3>
              <p>
                Sichomphu Suksa At Khonkean
              </p>
            </div>
            <div class="text-box">
              <h3>High School</h3>
              <p>
              Sichomphu Suksa At Khonkean
              </p>
            </div>
            <div class="text-box">
              <h3>Higher Education</h3>
              <p>
                At Mahasarakham University
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="skill">
        <div class="container reveal fade-left">
          <h2>Skill</h2>
          <div class="text-container">
            <div class="text-box">
              <h3>Languages</h3>
              <p>
              ❖JavaScript{"\n"}
              ❖Html{"\n"}
              ❖Flutter{"\n"}
              </p>
            </div>
            <div class="text-box">
              <h3>Framework</h3>
              <p>
              ❖NodeJs{"\n"}❖ReactJs{"\n"}❖Spring Boot{"\n"}❖Bootstrap{"\n"}
              </p>
            </div>
            <div class="text-box">
              <h3>Data Base</h3>
              <p>
              ❖MySQL{"\n"}❖MongoDB{"\n"}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section classname="bgc"id="talent">
        <div class="container reveal fade-right">
          <h2>Talent</h2>
          <div class="text-container">
            <div class="text-box">
              <h3>My Song</h3>
              <p >This is My Last Project {"\n"}
              And I have three team members </p>
            </div>
            <div class="text-box">
              <h3>Name ♬ รักไปแล้ว Pt'Lone x TOMKAY</h3>
              <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=HZc_POxCZ7M"
      />
    </div>
            </div>
            <div class="text-box">
              <h3>This is My Team Chanel</h3>{"\n"}
              <p>
              ★GRSK{"\n"}
              ★TOMKAY{"\n"}
              ★PT'LONE{"\n"}
              </p>
            </div>
          </div>
        </div>
      </section>


      
      </Infos>
      </div>
    )
}


const Infos = styled.section`
@import url("https://fonts.googleapis.com/css2?family=Asap&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Asap", sans-serif;
}

section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
section:nth-child(1) {
  color: #e0ffff;
  
}
section:nth-child(2) {
  color: #42455a;
  background: #FFC622;
  opacity: 0.9;
}
section:nth-child(3) {
  color: #e0ffff;
  background: #595958;
  opacity: 0.9;
}
section:nth-child(4) {
  color: #42455a;
  background: #e0ffff;
  
}
section .container {
  margin: 100px;
  
  
}


p{
    text-align: center;
    font-size: 18px;
}


section h1 {
  font-size: 3rem;
  margin: 20px;
}
section h2 {
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
}
section .text-container {
  display: flex;
}
section .text-container .text-box {
  margin: 20px;
  padding: 20px;
  background: #00c2cb;
  
}



section .text-container .text-box h3 {
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;

}

@media (max-width: 900px) {
  section h1 {
    font-size: 2rem;
    text-align: center;
  }
  section .text-container {
    flex-direction: column;
  }
}

.reveal {
  position: relative;
  opacity: 0;
}

.reveal.active {
  opacity: 1;
}
.active.fade-bottom {
  animation: fade-bottom 1s ease-in;
}
.active.fade-left {
  animation: fade-left 1s ease-in;
}
.active.fade-right {
  animation: fade-right 1s ease-in;
}
@keyframes fade-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-left {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-right {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
`;

export default Infomation;
