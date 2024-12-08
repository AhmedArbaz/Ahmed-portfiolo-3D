import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
height:100vh;
scroll-snap-align:center;
display:flex;
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
flex: 1;


`
const Right = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;

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
width:120px;
`
const Hero = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3d model  */}
          
        </Left>
        <Right>
        <Title>Think outside the square space</Title>
          <WhatWeDo>
          <Line src='./img/line.png'/>
          <SubTitle>What we Are</SubTitle>
          </WhatWeDo>
          <Desc>
            A creative group of designers and developers with a passion for the arts
          </Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
