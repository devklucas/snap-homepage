import { useState } from "react";

import ImgLogo from "../assets/images/logo.svg";
import Menu from "../assets/images/icon-menu.svg";
import Ads1 from "../assets/images/client-databiz.svg";
import Ads2 from "../assets/images/client-audiophile.svg";
import Ads3 from "../assets/images/client-meet.svg";
import Ads4 from "../assets/images/client-maker.svg";

import MenuMobile from "../components/MenuMobile";
import MenuDesktop from "../components/MenuDesktop";

import {
  Container,
  Header,
  Logo,
  BoxContent,
  MainContent,
  BoxImage,
  Title,
  TextParagraph,
  BtnLearnMore,
  Footer,
} from "../styles/home";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => setOpenMenu(!openMenu);

  return (
    <Container>
      <Header>
        <Logo src={ImgLogo} alt="Logmarca" />
        <img
          src={Menu}
          alt="Icon menu"
          onClick={handleMenu}
          className="Menu-mobile"
        />
        <MenuDesktop/>  
      </Header>
      <BoxContent>
        <BoxImage />
        <MainContent>
          <Title>Make remote work</Title>
          <TextParagraph>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </TextParagraph>
          <BtnLearnMore>Learn More</BtnLearnMore>
          <Footer>
            <img src={Ads1} alt="ads" />
            <img src={Ads2} alt="ads" />
            <img src={Ads3} alt="ads" />
            <img src={Ads4} alt="ads" />
          </Footer>
        </MainContent>
        {openMenu === true && <MenuMobile handleMenu={handleMenu} />}
      </BoxContent>
    </Container>
  );
};
export default Home;
