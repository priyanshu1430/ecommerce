import styled from 'styled-components';
import React from 'react'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;

`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border:1px solid grey;
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    border: none;
    flex: 1;
    background-color: teal;
    color: white;
`;

const NewLetter = () => {
  return (
    <Container>
        <Title> News Letter </Title>
            <Description>Get timely update from your favorite Products</Description>
                <InputContainer>
                <Input placeholder='Your Email'/>
                <Button>
                    <SendIcon/>
                </Button>
                </InputContainer>
    </Container>
  )
}

export default NewLetter