import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
height:100vh;
scroll-snap-align:center;
display:flex;
flex-direction:column;
justify-content:space-between;
`

const Container = styled.div`
height:100vh;
scroll-snap-align:center;
width:1400px;
display:flex;

justify-content:space-between;
`
const Left = styled.div`
flex: 2;
display:flex;
flex-direction:column;
justify-content:center;
margin-left:100px;

`
const Title = styled.h1`
font-size:40px;
color: rgb(204, 310, 204);
`
const WhatWeDo = styled.div`
display:flex;
align-items:center;
gap:10px;


`
const Line = styled.img`
filter:invert(1);
height:5px;
width:30px;
border-radius:105px;


`
const SubTitle = styled.h2`
color: rgb(204, 204, 204);
`
const Desc = styled.p`
font-size:20px;
color: rgb(204, 204, 204);
font-weight:700;
`
const Button = styled.button`
background-color:#285858;
color: rgb(204, 204, 204);
padding:10px;
font-weight:bold;
border:none;
border-radius:5px;
cursor:pointer;
width:100px;
`
const Right = styled.div`
flex:3;
marginleft:100px;
display:flex;
align-items:center;
justify-content:center;
// mix-blend-mode: screen;
opacity:0.7;
position:relative;
// NOTE: position relative right ko dia Q kay ager nahi dain gay to phir jab nichay image ko position absoulute di hay to ya body ko parent samaj kay center ho jay ga to aisi liay ais right ko relative day dia to ya image ka parent ho gaya




`
const Image = styled.img`
width:400px;
height:400px;
border-radius:20px;
object-fit:contain;
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
margin:auto;

// NOTE: giving animation to image
animation: animate 2s infinite ease alternate;

// name:animation, timing:2s, iteration:infinite,speed:ease(slow),  direction:alternate

@keyframes animate{
  from{
    transform:translateY(-10px);
  }
  to{
    transform:translateY(10px);
  }
}
  // NOTE: image ko auper nichay karny kay liay ya dia hay
`
const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Think. Make. Solve</Title>
          <WhatWeDo>
          <Line src='./img/line.png'/>
          <SubTitle>What we Do</SubTitle>
          </WhatWeDo>
          <Desc>
            We enjoy creating delightful, human-centered digital experiences
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/* 3d model  */}
          <Image src='./img/technology.png'/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
