import React from 'react'
import { Facebook, Instagram, } from '../Navbar/Navbar'
import { CloseIcon, Icon, NavSocial, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper, SideIconWrap } from './Sidear'

const Sidear = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/work" onClick={toggle}>
                        Work
                    </SidebarLink>
                    <SidebarLink to="/contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideIconWrap >
                    <NavSocial onClick={toggle} >
                          <a target="_blank"  rel="noreferrer" href="https://www.instagram.com/lojainradwann/">
                            <Instagram  />
                          </a>
                          <a target="_blank"  rel="noreferrer" href="https://www.facebook.com/logy.waleed.501">
                            <Facebook />
                          </a>  
                    </NavSocial>
                </SideIconWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidear
