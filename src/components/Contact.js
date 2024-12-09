import React from 'react'
import styled from 'styled-components'
import Map from './Map'

const Section = styled.div`
height:100vh;
scroll-snap-align:center;

`
const Container = styled.div`
width;100%;
display:flex;
justify-content:space-between;
gap:50px;
height:100vh;

`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
flex-direction:column;

`
const Title = styled.h1`
font-weight:400;

`
const Form = styled.form`
width:500px;
display:flex;
flex-direction:column;
gap:25px;
font-weight:500;
`

const Input = styled.input`
padding:20px;
background-color:rgb(226, 225, 225);
border-radius: 10px;
color:#285858;
font-weight:700;
`
const TextArea = styled.textarea`
padding:20px;
border:none;
border-radius: 10px;  
background-color:rgb(226, 225, 225);
font-weight:700;
font-size:15px;


`
const Button = styled.button`
padding:10px;
border:none;
background-color:#285858;
color:white;
border-radius:10px;
cursor:pointer;
font-weight:700;
font-size:15px;

`

const Right = styled.div`
flex:1;


`
const handleSubmit = (e) => {
  e.preventDefault();
  // Ager ya nahi karin gay to page reload ho ga

}


const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Let's keep in touch</Title>
          <Form onSubmit ={handleSubmit}>
            <Input placeholder='Name' />
            <Input placeholder='Email' />
            <TextArea placeholder='Write Message' rows={10} />
            <Button type='submit'>Send</Button>
          </Form>
        </Left>
        <Right>
          {/* NOTE: react-simple-map say ya ak sandbox say copy kia aur Map.js file may dala aur ais ki geography feature.jsaon may dali hay */}
          <Map/>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact
