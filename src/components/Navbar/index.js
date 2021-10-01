import React from 'react'
import { Facebook, Instagram, MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu, NavSocial } from './Navbar'
import {FaBars} from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Lojain Radwan</NavLogo>
                    <MobileIcon onClick={toggle}>
                      <FaBars />
                    </MobileIcon>
                    <NavMenu>
                      <NavItem>
                        <NavLinks to='/work'>Work</NavLinks>
                      </NavItem>
                      <NavItem>
                        <NavLinks to='/contact'>Contact</NavLinks>
                      </NavItem>                     
                        <NavSocial>
                          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/lojainradwann/">
                            <Instagram  />
                          </a>
                          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/logy.waleed.501">
                            <Facebook />
                          </a>                                                       
                        </NavSocial>                      
                    </NavMenu>                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar