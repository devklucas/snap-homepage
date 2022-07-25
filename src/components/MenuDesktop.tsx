import { useState } from "react";
import styled from "styled-components";

import ArrowDown from "../assets/images/icon-arrow-down.svg";
import ArrowUp from "../assets/images/icon-arrow-up.svg";

import ToDo from "../assets/images/icon-todo.svg";
import Calendar from "../assets/images/icon-calendar.svg";
import Reminders from "../assets/images/icon-reminders.svg";
import Planning from "../assets/images/icon-planning.svg";

type Props = {
  handleMenu?: () => void;
};

const ContainerMenu = styled.aside`
  display: none;

  @media (min-width: 426px) {
    height: 10vh;
    width: 100%;
    display: flex;
    background-color: var(--almost-White);
    color: var(--medium-Gray);
    font-size: 1rem;
    ul {
      display: flex;
      align-items: center;
      gap: 20px;
      width: 80%;
      margin: 0 auto;
    }
    li {
      margin: 0;
      margin-left: 1rem;
      cursor: pointer;
    }
    .BtnRegister {
      border-radius: 12px;
      border: 0.8px solid var(--medium-Gray);
    }
  }
`;
const Buttons = styled.button`
  @media (min-width: 426px) {
    width: 120px;
    height: 50%;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    color: var(--medium-Gray);
  }
`;
const Navigation = styled.nav`
  @media (min-width: 426px) {
    display: flex;
    width: 95%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
  }
`;
const NavSelects = styled.li`
  @media (min-width: 426px) {
    position: relative;
    nav {
      display: flex;
      position: absolute;
      flex-direction: column;
      gap: 15px;
      background-color: var(--almost-White);
      box-shadow: 0 0 1em var(--medium-Gray);
      padding: 20px;
      margin-top: 10px;
      margin-left: 0px;
    }
    span {
      display: flex;
      align-items: center;
    }
  }
`;
const OptionsSelects = styled.button`
  @media (min-width: 426px) {
    width: max-content;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: var(--medium-Gray);

    img {
      margin-left: 10px;
    }
  }
`;

const MenuDesktop = ({ handleMenu }: Props) => {
  const [navFeatures, setNavFeatures] = useState(false);
  const [navCompany, setNavCompany] = useState(false);

  const handleFeatures = () => setNavFeatures(!navFeatures);
  const handleCompany = () => setNavCompany(!navCompany);
  return (
    <ContainerMenu>
      <Navigation>
        <ul>
          <NavSelects onClick={handleFeatures}>
            {navFeatures === false ? (
              <span>
                Features <img src={ArrowDown} alt="Button arrow down" />
              </span>
            ) : (
              <>
                <span>
                  Features <img src={ArrowUp} alt="Button arrow up" />{" "}
                </span>
                <nav>
                  <OptionsSelects>
                    <img src={ToDo} alt="To do" /> Todo List
                  </OptionsSelects>
                  <OptionsSelects>
                    <img src={Calendar} alt="Calendar" /> Calendar
                  </OptionsSelects>
                  <OptionsSelects>
                    <img src={Reminders} alt="To do" /> Reminders
                  </OptionsSelects>
                  <OptionsSelects>
                    <img src={Planning} alt="To do" /> Planning
                  </OptionsSelects>
                </nav>
              </>
            )}
          </NavSelects>
          <NavSelects onClick={handleCompany}>
            {navCompany === false ? (
              <span>
                Company <img src={ArrowDown} alt="Button arrow down" />
              </span>
            ) : (
              <>
                <span>
                  Company <img src={ArrowUp} alt="Button arrow up" />{" "}
                </span>
                <nav>
                  <OptionsSelects>History</OptionsSelects>
                  <OptionsSelects>Our Team</OptionsSelects>
                  <OptionsSelects>Blog</OptionsSelects>
                </nav>
              </>
            )}
          </NavSelects>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <Buttons>Login</Buttons>
        <Buttons className="BtnRegister">Register</Buttons>
      </Navigation>
    </ContainerMenu>
  );
};
export default MenuDesktop;
