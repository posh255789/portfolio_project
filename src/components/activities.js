import React,{useEffect} from 'react'
import $ from 'jquery';
import styled from 'styled-components';
import '../components/navbar';
import Image1 from '../asset/images/1.png'
import Image2 from '../asset/images/2.png'
import Image3 from '../asset/images/3.png'
const Activities = () => {

    useEffect(() => {
        
    
    }, []);
      
    return (
        <>
        <div class="Actycust " id="acty">
            <Acty>
            <section>
    <div class="container">
        <div class="carousel">
            <input type="radio" name="slides" checked="checked" id="slide-1"/>
            <input type="radio" name="slides" id="slide-2"/>
            <input type="radio" name="slides" id="slide-3"/>
            <input type="radio" name="slides" id="slide-4"/>
            <input type="radio" name="slides" id="slide-5"/>
            <input type="radio" name="slides" id="slide-6"/>
            <ul class="carousel__slides">
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src={Image2} alt=""/>
                        </div>
                        <figcaption>
                            <span class="credit">ออกอาสาเก็บขยะ {"\n"} ริมแก่งเลิงจาน</span>
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src={Image1} alt=""/>
                        </div>
                        <figcaption>
                            <span class="credit">ได้ขึ้นเวทีเป็นนักร้องวง Acoustic</span>                            
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                    <figure>
                        <div>
                            <img src={Image3} alt=""/>
                        </div>
                        <figcaption>
                            <span class="credit">เข้าบริจาคเลือด สภากาชาดไทย </span>                            
                        </figcaption>
                    </figure>
                </li>
                <li class="carousel__slide">
                </li>
            </ul>    
            <ul class="carousel__thumbnails">
                <li>
                    <label for="slide-1"><img src={Image2} alt=""/></label>
                </li>
                <li>
                    <label for="slide-2"><img src={Image1} alt=""/></label>
                </li>
                <li>
                    <label for="slide-3"><img src={Image3} alt=""/></label>
                </li>
            </ul>
        </div>
    </div>
</section>
</Acty>
</div>

        </>
    )
}

const Acty = styled.section`
@mixin aspect-ratio($width, $height) {
    position: relative;
      
    &:before {
      display: block;
      content: "";
      width: 100%;
      padding-top: ($height / $width) * 100%;
    }
      
    > img {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
    }
  }
  
  // Styling
  
  section {
      background: #F4F4F4;
      padding: 50px 0;
  }
  
  .container {
      max-width: 1044px;
      margin: 100px auto;
      padding: 0 20px;
  }
  
  .carousel {
      display: block;
      text-align: left;
      position: relative;
      margin-bottom: 22px;
       > input {
          clip: rect(1px, 1px, 1px, 1px);
          clip-path: inset(50%);
          height: 1px;
          width: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          
          &:nth-of-type(6):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: -500%; }
          &:nth-of-type(5):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: -400%; }
          &:nth-of-type(4):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: -300%; }
          &:nth-of-type(3):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: -200%; }
          &:nth-of-type(2):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: -100%; }
          &:nth-of-type(1):checked ~ .carousel__slides .carousel__slide:first-of-type { margin-left: 0%; }
          
          &:nth-of-type(1):checked ~ .carousel__thumbnails li:nth-of-type(1) { box-shadow: 0px 0px 0px 5px rgba(0,0,255,0.5); }
          &:nth-of-type(2):checked ~ .carousel__thumbnails li:nth-of-type(2) { box-shadow: 0px 0px 0px 5px rgba(0,0,255,0.5); }
          &:nth-of-type(3):checked ~ .carousel__thumbnails li:nth-of-type(3) { box-shadow: 0px 0px 0px 5px rgba(0,0,255,0.5); }
          &:nth-of-type(4):checked ~ .carousel__thumbnails li:nth-of-type(4) { box-shadow: 0px 0px 0px 5px rgba(0,0,255,0.5); }
          &:nth-of-type(5):checked ~ .carousel__thumbnails li:nth-of-type(5) { box-shadow: 0px 0px 0px 5px rgba(0,0,255,0.5); }
          &:nth-of-type(6):checked ~ .carousel__thumbnails li:nth-of-type(6) { box-shadow: 0px 0px 0px 5px rgba(0,0,255,0.5); }
      }
  }
  
  .carousel__slides {
      position: relative;
      z-index: 1;
      padding: 0;
      margin: 0;
      overflow: hidden;
      white-space: nowrap;
      box-sizing: border-box;
      display: flex;
  }
  
  .carousel__slide {
      position: relative;
      display: block;
      flex: 1 0 100%;
      width: 100%;
      height: 100%;
      overflow: hidden;
      transition: all 300ms ease-out;
      vertical-align: top;
      box-sizing: border-box;
      white-space: normal;
      
      figure {
          display: flex;
          margin: 0;
      }
      
      div {
          @include aspect-ratio(3, 2);
          width: 100%;
      }
      
      img {
          display: block;
          flex: 1 1 auto;
          object-fit: cover;
      }
      
      figcaption {
          align-self: flex-end;
          padding: 20px 0px 0 20px;
          flex: 0 0 auto;
          width: 25%;
          font-size: 5rem 
          min-width: 150px;
      }
      
      .credit {
          margin-top: 1rem;
          color: rgba(0, 0, 0, 0.5);
          display: block;
          font-size: 2rem        
      }
      
      &.scrollable {
          overflow-y: scroll;
      }
  }
  
  .carousel__thumbnails {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      
      margin: 0 -10px;
      
      .carousel__slides + & {
          margin-top: 20px;
      }
      
      li {        
          flex: 1 1 auto;
          max-width: calc((100% / 6) - 20px);  
          margin: 0 10px;
          transition: all 300ms ease-in-out;
      }
      
      label {
          display: block;
          @include aspect-ratio(1,1);
          
                    
          &:hover,
          &:focus {
              cursor: pointer;
              
              img {
                  box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.25);
                  transition: all 300ms ease-in-out;
              }
          }
      }
      
      img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
      }
  }
`;

export default Activities;