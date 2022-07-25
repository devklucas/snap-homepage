import styled from 'styled-components'
import ArtMobile from "../assets/images/image-hero-mobile.png";
import ArtDesktop from '../assets/images/image-hero-desktop.png'

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
  @media (min-width: 426px){
    padding:0px;
    height:10%;
    .Menu-mobile{
        display:none;
    }   
  }

`;
const Logo = styled.img`
   @media (min-width: 426px){
      width:7%;
      padding: 10px;
   }
`
const BoxContent = styled.main`
    width:100%;
    height: calc(100% - 10%);
    @media (min-width: 426px){
        align-items:center;
        justify-content: space-evenly;
        display:flex;
       
    }
`
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  gap:15px;
  order:1;
   @media (min-width: 426px){
    width:40%; 
    height: 70%;
    align-items:flex-start;
    justify-content: space-between;
  }
`;
const BoxImage = styled.section`
  background: url(${ArtMobile}) no-repeat;
  background-size: 100% 100%; 
  width: 100%;
  height: 45%;
  @media (min-width: 426px){
    background: url(${ArtDesktop}) no-repeat;
    height: 80%;
    width: 30%;
    background-size: 100% 100%;
    order:2; 
  }
`;
const Title = styled.h1`
  font-size: 1.8rem;
  @media (min-width: 426px){
      font-size: 4rem;
      text-align:left;
   }
`;
const TextParagraph = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--medium-Gray);
  text-align: center;
  margin:0 40px;
  line-height: 20px;
  @media (min-width: 426px){
      width:80%;
      font-size: 1rem;
      line-height: normal;
      text-align:left;
      margin:0;
   }
`;
const BtnLearnMore = styled.button`
  background-color: var(--almost-Black);
  border: none;
  border-radius: 10px;
  color: var(--almost-White);
  padding: 10px;
  @media (min-width: 426px){
    font-size:1rem;
    padding:15px;
    :hover{
      background-color:var(--almost-White);
      color: var(--almost-Black);
      border:0.8px solid var(--almost-Black)
    }
  }
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
  @media (min-width: 426px){
    height: 10%;
  }
`;

export {Container,
    Header,
    Logo,
    BoxContent, 
    MainContent,
    BoxImage,
    Title,
    TextParagraph,
    BtnLearnMore,
    Footer}