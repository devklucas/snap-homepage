import {useState} from 'react'
import styled from 'styled-components'
import Btnclosed from '../assets/images/icon-close-menu.svg'

import ArrowDown from '../assets/images/icon-arrow-down.svg'
import ArrowUp from '../assets/images/icon-arrow-up.svg'

import ToDo from '../assets/images/icon-todo.svg'
import Calendar from '../assets/images/icon-calendar.svg'
import Reminders from '../assets/images/icon-reminders.svg'
import Planning from '../assets/images/icon-planning.svg'

type Props = {
    handleMenu?: () => void
}

const ContainerMenu = styled.aside`
    position:absolute;
    right:0;
    top:0;
    height: 100vh;
    width: 65vw;
    background-color: var(--almost-White);
    z-index: 1;
    color: var(--medium-Gray);
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
    @media (min-width: 426px){
        position:relative;
        height:10vh;
        width:100%;
        display: flex;
        box-shadow: none;
        font-size:1rem;
        ul{
            display:flex;
            align-items:center;
            gap:20px;
        }
        li{
            margin:0;
            margin-left: 1rem;
            cursor:pointer;
        }
    }
`
const Buttons = styled.button`
    width:90%;
    height:35px;
    margin:0 auto 15px auto;
    background-color: transparent;
    border:none;
    color: var(--medium-Gray);
    @media (min-width: 426px){
        margin:0;
        width: 120px;
        height:50%;
        font-size: 1rem;
    }
`
const Navigation = styled.nav`
        display:flex;
        flex-direction: column;
        justify-content:center;
        margin-top: 50px;
    @media (min-width: 426px){
        width:95%;
        height:100%;
        flex-direction: row;
        align-items:center;
        justify-content: space-between;
        margin:0;
        padding-left: 10px;
        border:1px solid black;
    }
`
const NavSelects = styled.li`
    nav{
        display:flex;
        flex-direction: column;
        margin:10px;
        margin-left: 20px;
        gap:15px;
    }
    @media (min-width: 426px){
        position:relative;
        nav{
            position:absolute;
            background-color:var(--almost-White); 
            box-shadow: 0 0 1em var(--medium-Gray);  
            padding:20px;
            margin-top:10px;
            margin-left:0px;
        }
        span{
            display:flex;
            align-items:center;
        }
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
    @media (min-width: 426px){
        width:max-content;
        img{
            margin-left: 10px;
        }
    }   
`
const BtnClose = styled.img`
    position: absolute;
    right:10px;
    top:10px;
    @media (min-width: 426px){
        display:none;
    }   
`

const MenuMobile = ({handleMenu} : Props) => {
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
export default MenuMobile