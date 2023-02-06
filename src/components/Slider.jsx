import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";
import { sliderItems } from "../pages/data";


const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    /* background-color: coral; */
    position: relative;
    overflow: hidden;
`
const Arrow= styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom:0;
    opacity: .5;
    left: ${props => props.direction === "left" &&"10px"};
    right: ${props => props.direction === "right" &&"10px"};
    z-index: 2;
    margin: auto;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${props=>props.slideIndex * -100}vw);
`

const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${props=> props.bg};
`;
const ImageContainer = styled.div`
flex: 1;
height: 100%;
`;
const Image = styled.img`
   height: 80%;
   background-blend-mode: lighten;
 `;
 const Infocontainer = styled.div`
  flex: 1;
 padding: 50px;
 `;

 const Title = styled.h1`
 font-size:70px;
 `;
 const Desc = styled.p`
 margin: 50px 0px ;
 font-weight:500 ;
letter-spacing: 3px;
 `;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color:transparent ;
cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] =useState(0);
    const handleClick = (direction) =>{

        if(direction ==="left"){
            setSlideIndex(slideIndex  > 0 ? slideIndex-1 :2)
        } else{
            setSlideIndex(slideIndex < 2?slideIndex+1:0);
        }
    }

        

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>
            <Slide bg={item.bg}>
            <ImageContainer>
                <Image src={item.img}/>
            </ImageContainer>
            <Infocontainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>Shop Now</Button>
            </Infocontainer>
            </Slide>)}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
};

export default Slider;