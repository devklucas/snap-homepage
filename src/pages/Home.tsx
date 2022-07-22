import styled from "styled-components";
import Logo from "../assets/images/logo.svg";
import Menu from "../assets/images/icon-menu.svg";

import ArtMobile from "../assets/images/image-hero-mobile.png";
import ArtDesktop from '../assets/images/image-hero-desktop.png'
import Ads1 from "../assets/images/client-databiz.svg";
import Ads2 from "../assets/images/client-audiophile.svg";
import Ads3 from "../assets/images/client-meet.svg";
import Ads4 from "../assets/images/client-maker.svg";

import { MenuMobile } from "../components/MenuMobile";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  gap:15px;
`;
const BoxImage = styled.section`
  background: url(${ArtMobile}) no-repeat;
  background-size: 100% 100%; 
  width: 100%;
  height: 45%;
`;
const Title = styled.h1`
  font-size: 1.8rem;
`;
const TextParagraph = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--medium-Gray);
  text-align: center;
  margin:0 40px;
  line-height: 20px;
`;
const BtnLearnMore = styled.button`
  background-color: var(--almost-Black);
  border: none;
  border-radius: 10px;
  color: var(--almost-White);
  padding: 10px;
`;
const Footer = styled.footer`
  display: flex;
  height:4%;
  justify-content:space-around;
  width:100%;
  margin-top: 20px;
  img {
    width: 50px;
    height: 20px;
  }
`;

const Home = () => {
    const [openMenu, setOpenMenu] = useState(false)
   
    const handleMenu = () => setOpenMenu(!openMenu) 
    return (
    <Container>
      <Header>
        <img src={Logo} alt="Logmarca" />
        <img src={Menu} alt="Icon menu" onClick={handleMenu}/>
      </Header>
      <BoxImage />
      <MainContent>
        <Title>Make a remote work</Title>
        <TextParagraph>
          Get your team in sync, no matter your
          location. Streamline processes,
          create team rituals, and watch productivity soar.
        </TextParagraph>
        <BtnLearnMore>Learn More</BtnLearnMore>
      </MainContent>
      <Footer>
      <img src={Ads1} alt='ads'/> 
      <img src={Ads2} alt='ads'/> 
      <img src={Ads3} alt='ads'/> 
      <img src={Ads4} alt='ads'/> 
      </Footer>
       {    openMenu === true && 
           <MenuMobile handleMenu={handleMenu}/>  
        }
    </Container>
  );
};
export default Home;
