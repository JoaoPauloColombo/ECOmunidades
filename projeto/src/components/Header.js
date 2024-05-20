import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImage from '../assetsFinal/logo.png';

const HeaderContainer = styled.header`
    height: 100px;
    width: 100%;
    background: #136D58;
    flex: 1 1 100vw;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        height:60%;
    }
`;

const Logo = styled.div`
    flex: 1 1 200px;
    align-items: center;
    @media (max-width: 768px) {
        flex: 1 1 100%;
    }
`;

const LogoImageStyled = styled.img`
    width: 250px;
    height: 250px;
    @media (max-width: 768px) {
        width: 100px;
        height: 100px;
    }
`;

const MenuButton = styled.button`
    border: none;
    background: none;
    font-size: 30px;
    font-weight: bold;
    padding: 0px 5px 0px 5px;
    cursor: pointer;
    display: none;
    @media (max-width: 768px) {
    }
`;

const Nav = styled.nav`
    justify-content: flex-end;
    background: #136D58;
    align-items: center;
    flex: 1 1 200px;
    color: #FFF;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    display: flex;
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        order: 2;
    }
`;

const NavLinks = styled.div`
    display: flex;
    @media (max-width: 768px) {
        width: 90%;
        justify-content: space-around;
    }
`;

const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin: 0 1em;
    &:hover{
        text-decoration: underline;
        color: #00FF1A;
    }
    @media (max-width: 768px) {
        margin: 1em 0;
        font-size:14px;
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <Logo href="./layout.html">
                <LogoImageStyled src={LogoImage} alt="" />
            </Logo>
            <MenuButton id="openMenu">&#9776;</MenuButton>
            <NavLinks>
                <Nav>
                    <StyledLink to="/">Home</StyledLink>
                </Nav>
                <Nav>
                    <StyledLink to="/noticias">Noticias</StyledLink>
                </Nav>
                <Nav>
                    <StyledLink to="/projetos">Projetos</StyledLink>
                </Nav>
                <Nav>
                    <StyledLink to="/cadastro">Cadastro Noticia</StyledLink>
                </Nav>
            </NavLinks>
        </HeaderContainer>
    );
}

export default Header;