import {useState} from 'react'
import styled from 'styled-components'
import Btnclosed from '../assets/images/icon-close-menu.svg'

import ArrowDown from '../assets/images/icon-arrow-down.svg'
import ArrowUp from '../assets/images/icon-arrow-up.svg'

import ToDo from '../assets/images/icon-todo.svg'
import Calendar from '../assets/images/icon-calendar.svg'
import Reminders from '../assets/images/icon-reminders.svg'
import Planning from '../assets/images/icon-planning.svg'

const ContainerMenu = styled.aside`
    position:absolute;
    right:0;
    top:0;
    height: 100vh;
    width: 65vw;
    background-color: var(--almost-White);
    z-index: 1;
    color: var(--medium-Gray);
    /* -webkit-box-shadow: -91px 0px 0px 0px rgba(20,20,20,0.46); */
    /* -moz-box-shadow: -91px 0px 0px 0px rgba(20,20,20,0.46); */
    box-shadow: -200px 0px 0px 0px rgba(20,20,20,0.7);
    
    ul{
        width:80%;
        margin:0 auto;
    }
    li{
        margin-bottom: 20px;
    }
    .BtnRegister{
        border-radius:12px;
        border: 0.8px solid var(--medium-Gray);
    }
`
const Buttons = styled.button`
    width:90%;
    height:35px;
    margin:0 auto 15px auto;
    background-color: transparent;
    border:none;
    color: var(--medium-Gray);
`
const Navigation = styled.nav`
        display:flex;
        flex-direction: column;
        justify-content:center;
        margin-top: 50px;
`
const NavSelects = styled.li`
    nav{
        display:flex;
        flex-direction: column;
        margin:10px;
        margin-left: 20px;
        gap:15px;
    }
  
` 
const OptionsSelects  = styled.button`
    border:none;
    background-color: transparent;
    display:flex;
    align-items:center;
    justify-content: flex-start;
    color: var(--medium-Gray);
    img{
        margin-right:10px;
    }
`
const BtnClose = styled.img`
    position: absolute;
    right:10px;
    top:10px;   
`
type Props = {
    handleMenu: () => void
}
export const MenuMobile = ({handleMenu} : Props) => {
    const [navFeatures, setNavFeatures] = useState(false)
    const [navCompany, setNavCompany] = useState(false)

    const handleFeatures = () => setNavFeatures(!navFeatures)
    const handleCompany = () => setNavCompany(!navCompany)
    return(
        <ContainerMenu>
        <BtnClose src={Btnclosed} alt="close Menu" onClick={handleMenu}/>
        <Navigation>
        <ul>
            <NavSelects onClick={handleFeatures}>
             {   
                    navFeatures === false 
                    ? <span>Features <img src={ArrowDown} alt="Button arrow down" /></span> 
                    : 
                    <> 
                    <span>Features <img src={ArrowUp} alt="Button arrow up" /> </span> 
                        <nav>
                            <OptionsSelects><img src={ToDo} alt="To do" /> Todo List</OptionsSelects>
                            <OptionsSelects><img src={Calendar} alt="Calendar" /> Calendar</OptionsSelects>
                            <OptionsSelects><img src={Reminders} alt="To do" /> Reminders</OptionsSelects>
                            <OptionsSelects><img src={Planning} alt="To do" /> Planning</OptionsSelects> 
                        </nav>   
                    </>
                }
            </NavSelects>
            <NavSelects onClick={handleCompany}>
                {   
                    navCompany === false 
                    ? <span>Company <img src={ArrowDown} alt="Button arrow down" /></span> 
                    : 
                    <> 
                    <span>Company <img src={ArrowUp} alt="Button arrow up" /> </span> 
                        <nav>
                            <OptionsSelects>History</OptionsSelects>
                            <OptionsSelects>Our Team</OptionsSelects>
                            <OptionsSelects>Blog</OptionsSelects>
                        </nav>   
                    </>
               }
            </NavSelects>
            <li>Careers</li>
            <li>About</li>
        </ul>
        <Buttons>Login</Buttons>
        <Buttons className='BtnRegister'>Register</Buttons>
        </Navigation>
    </ContainerMenu>  
    )
}