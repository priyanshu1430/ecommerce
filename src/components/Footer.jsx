import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { MailLockOutlined, Phone, Room } from '@mui/icons-material';
import {mobile} from "../responsive"

const Container = styled.div`
    display:flex;
    ${mobile({ flexDirection:"column" })}

`;
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1`

`;

const Desc= styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
`;



const Center = styled.div`
    flex:1;
    padding: 20px;
    /* ${mobile({ display:"none" })} */

`;
const Title=styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding:0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({backgroundColor:"#e8dcdc"})}

`;

const ContactItem =styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment=styled.img`
    width: 70%;
`;



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>THE COLLEGE GEAR</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <PinterestIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Use Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>State Highway 69</ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>1800 1800 2000
            </ContactItem>
            <ContactItem>
                <MailLockOutlined style={{marginRight:"10px"}}/>
                thecollegegear@gmail.com
            </ContactItem>
            <Payment src="https://store-cdn.arduino.cc/uni/wysiwyg/Payment_Options.jpg"/>
        </Right>
    </Container>
  )
}

export default Footer